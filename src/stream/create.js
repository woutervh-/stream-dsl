export default function create(producer) {
    const listeners = [];
    let started = false;
    let finished = false;

    const next = (value) => {
        if (!finished) {
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
        if (!finished) {
            while (listeners.length >= 1) {
                const listener = listeners.pop();
                if (listener.complete) {
                    listener.complete();
                }
            }
            finished = true;
            unsubscribe();
        } else {
            throw new Error('Producer cannot call complete after completion or error.');
        }
    };

    const error = (error) => {
        if (!finished) {
            while (listeners.length >= 1) {
                const listener = listeners.pop();
                if (listener.error) {
                    listener.error(error);
                }
            }
            finished = true;
            unsubscribe();
        } else {
            throw new Error('Producer cannot call complete after completion or error.');
        }
    };

    const subscribe = () => {
        if (!finished && !started) {
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
            if (finished) {
                throw new Error('Tried to subscribe to a stream that has completed or errored.');
            } else {
                listeners.push(listener);
                if (!started) {
                    subscribe();
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
        }
    };
};
