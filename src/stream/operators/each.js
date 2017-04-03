import create from '../create';

export default (sourceFactory) => (source) => {
    let subscription;
    let subscriptions = {};
    let canSendNext = true;

    return create({
        start: (listener) => {
            subscription = source.subscribe({
                next: (value) => {
                    if (typeof value === 'object') {
                        for (const key of Object.keys(value)) {
                            if (!subscriptions[key]) {
                                const localSource = sourceFactory(key, value[key], source);
                                if (localSource) {
                                    let completedOrErrored = false;
                                    subscriptions[key] = localSource.subscribe({
                                        next: (value) => {
                                            if (canSendNext) {
                                                listener.next(value);
                                            }
                                        },
                                        error: (error) => {
                                            completedOrErrored = true;
                                            if (canSendNext) {
                                                canSendNext = false;
                                                listener.error(error);
                                            }
                                        },
                                        complete: () => {
                                            completedOrErrored = true;
                                            if (subscriptions[key]) {
                                                subscriptions[key].unsubscribe();
                                                delete subscriptions[key];
                                            }
                                        }
                                    });
                                    if (completedOrErrored) {
                                        subscriptions[key].unsubscribe();
                                        delete subscriptions[key];
                                    }
                                }
                            }
                        }

                        const nextKeys = new Set(Object.keys(value));
                        for (const key of Object.keys(subscriptions)) {
                            if (!nextKeys.has(key)) {
                                subscriptions[key].unsubscribe();
                                delete subscriptions[key];
                            }
                        }
                    } else {
                        // Silently ignore and pass on the value, give the user a warning
                        console.warn(`The 'each' operator expects incoming values of type object. Received a value of type ${typeof value}.`);
                        listener.next(value);
                    }
                },
                complete: () => {
                    if (canSendNext) {
                        canSendNext = false;
                        listener.complete();
                    }
                },
                error: (error) => {
                    if (canSendNext) {
                        canSendNext = false;
                        listener.error(error);
                    }
                }
            })
            ;
        },
        stop: () => {
            for (const key of Object.keys(subscriptions)) {
                subscriptions[key].unsubscribe();
                delete subscriptions[key];
            }
            if (subscription) {
                subscription.unsubscribe();
                subscription = undefined;
            }
        }
    });
};
