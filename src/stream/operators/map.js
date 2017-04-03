import create from '../create';

export default (map) => (source) => {
    let subscription;

    return create({
        start: (listener) => {
            subscription = source.subscribe({
                next: (value) => {
                    listener.next(map(value));
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
