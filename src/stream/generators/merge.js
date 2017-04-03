import create from '../create';

export default (left, right) => {
    let leftSubscription;
    let rightSubscription;
    let leftCompleted = false;
    let rightCompleted = false;
    let errored = false;

    return create({
        start: (listener) => {
            leftSubscription = left.subscribe({
                next: (value) => {
                    if (!errored) {
                        listener.next(value);
                    }
                },
                complete: () => {
                    if (!errored) {
                        leftCompleted = true;
                        if (rightCompleted) {
                            listener.complete();
                        }
                    }
                },
                error: (error) => {
                    if (!errored) {
                        errored = true;
                        listener.error(error);
                    }
                }
            });
            rightSubscription = right.subscribe({
                next: (value) => {
                    if (!errored) {
                        listener.next(value);
                    }
                },
                complete: () => {
                    if (!errored) {
                        rightCompleted = true;
                        if (leftCompleted) {
                            listener.complete();
                        }
                    }
                },
                error: (error) => {
                    if (!errored) {
                        errored = true;
                        listener.error(error);
                    }
                }
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
