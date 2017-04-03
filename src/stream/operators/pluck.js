import create from '../create';

export default (...keys) => (source) => {
    let subscription;

    return create({
        start: (listener) => {
            subscription = source.subscribe({
                next: (value) => {
                    let result = value;
                    for (const key of keys) {
                        result = result[key];
                    }
                    listener.next(result);
                },
                complete: () => listener.complete(),
                error: (error) => listener.error(error)
            });
        },
        stop: () => {
            if (subscription) {
                subscription.unsubscribe();
                subscription = undefined;
            }
        }
    });
};
