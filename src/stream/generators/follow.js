import create from '../create';

export default function follow(left, right) {
    let leftSubscription;
    let rightSubscription;

    return create({
        start: (listener) => {
            leftSubscription = left.subscribe({
                next: (value) => {
                    listener.next(value);
                },
                complete: () => {
                    rightSubscription = right.subscribe({
                        next: (value) => {
                            listener.next(value);
                        },
                        complete: () => {
                            listener.complete();
                        },
                        error: (error) => listener.error(error)
                    });
                },
                error: (error) => listener.error(error)
            });
        },
        stop: () => {
            if (leftSubscription) {
                leftSubscription.unsubscribe();
                leftSubscription = undefined;
            }
            if (rightSubscription) {
                rightSubscription.unsubscribe();
                rightSubscription = undefined;
            }
        }
    });
};
