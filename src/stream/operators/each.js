import create from '../create';

const streamFactory = (key, source) => {
    let subscription;

    return {
        stream: create({
            start: (listener) => {
                let previousValue = undefined;

                subscription = source.subscribe({
                    next: (value) => {
                        if (previousValue !== value) {
                            previousValue = value;
                            listener.next({key, value});
                        }
                    },
                    error: (error) => listener.error(error),
                    complete: () => listener.complete()
                });
            },
            stop: () => {
                if (subscription) {
                    subscription.unsubscribe();
                    subscription = undefined;
                }
            }
        }),
        stop: () => {
            // TODO
        }
    };
};

export default () => (source) => {
    let subscription;
    let sources = {};

    return create({
        start: (listener) => {
            subscription = source.subscribe({
                next: (value) => {
                    if (typeof value === 'object') {
                        for (const key of Object.keys(value)) {
                            if (!sources[key]) {
                                const {stream, stop} = streamFactory(key, source);
                                sources[key] = stream;
                                listener.next(stream);
                            }
                        }
                        const nextKeys = new Set(Object.keys(value));
                        for (const key of Object.keys(sources)) {
                            if (!nextKeys.has(key)) {
                                sources[key] = undefined;
                                delete sources[key];
                            }
                        }
                    } else {
                        // Silently ignore and pass on the value, give the user a warning
                        console.warn(`The 'each' operator expects incoming values of type object. Received a value of type ${typeof value}.`);
                        listener.next(value);
                    }
                },
                complete: () => {
                    listener.complete();
                },
                error: (error) => {
                    listener.error(error);
                }
            });
        },
        stop: () => {
            for (const key of Object.keys(sources)) {
                sources[key] = undefined;
                delete sources[key];
            }
            if (subscription) {
                subscription.unsubscribe();
                subscription = undefined;
            }
        }
    });
};
