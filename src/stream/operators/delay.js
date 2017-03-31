import create from '../create';

export default (amount) => (source) => {
    const timeouts = [];
    let subscription;

    return create({
        start: (listener) => {
            subscription = source.subscribe({
                next: (value) => {
                    timeouts.push(setTimeout(() => {
                        listener.next(value);
                    }, amount));
                },
                complete: () => {
                    timeouts.push(setTimeout(() => {
                        listener.complete();
                    }, amount));
                },
                error: (error) => {
                    while (timeouts.length >= 1) {
                        clearTimeout(timeouts.pop());
                    }
                    listener.error(error);
                }
            });
        },
        stop: () => {
            if (subscription) {
                subscription.unsubscribe();
                subscription = undefined;
            }
            while (timeouts.length >= 1) {
                clearTimeout(timeouts.pop());
            }
        }
    });
};
