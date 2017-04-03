export default function create(producer) {
    const listeners = [];
    let completed = false;
    let errored = false;
    let started = false;
    let receivedValue = false;
    let rememberedError;
    let rememberedValue;

    const next = (value) => {
        if (!completed && !errored) {
            rememberedValue = value;
            receivedValue = true;
            for (const listener of listeners) {
                if (listener.next) {
                    listener.next(value);
                }
            }
        } else {
            throw new Error('Producer cannot call next after completion or error.');
        }
    };

    const complete = () => {
        if (!completed && !errored) {
            for (const listener of listeners) {
                if (listener.complete) {
                    listener.complete();
                }
            }
        } else {
            throw new Error('Producer cannot call complete after completion or error.');
        }
    };

    const error = (error) => {
        if (!completed && !errored) {
            rememberedError = error;
            for (const listener of listeners) {
                if (listener.error) {
                    listener.error(error);
                }
            }
        } else {
            throw new Error('Producer cannot call complete after completion or error.');
        }
    };

    const subscribe = () => {
        if (!completed && !errored && !started) {
            started = true;
            if (producer.start) {
                producer.start({next, complete, error});
            }
        } else {
            console.warn('Tried subscribing to a completed, errored, or already subscribed to stream.');
        }
    };

    const unsubscribe = () => {
        if (started) {
            started = false;
            if (producer.stop) {
                producer.stop();
            }
        } else {
            console.warn('Tried un-subscribing from a stream that is not subscribed to.');
        }
    };

    return {
        subscribe: (listener) => {
            listeners.push(listener);
            if (listeners.length === 1) {
                subscribe();
            } else if (completed) {
                listener.complete();
            } else if (errored) {
                listener.error(rememberedError);
            } else if (receivedValue) {
                listener.next(rememberedValue);
            }
            return {
                unsubscribe: () => {
                    const index = listeners.indexOf(listener);
                    if (index >= 0) {
                        listeners.splice(index, 1);
                        if (listeners.length === 0) {
                            unsubscribe();
                        }
                    }
                }
            };
        }
    };
};
