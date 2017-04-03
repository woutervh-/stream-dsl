import create from '../create';

export default (filter) => (source) => {
    let subscription;

    return create({
        start: (listener) => {
            subscription = source.subscribe({
                next: (value) => {
                    if (filter(value)) {
                        listener.next(value);
                    }
                },
                complete: () => listener.complete(),
                error: (error) => listener.error(error)
            });
        },
        stop: () => {
            if(subscription) {
                subscription.unsubscribe();
                subscription = undefined;
            }
        }
    });
};
