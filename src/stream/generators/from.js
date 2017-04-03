import create from '../create';

export default (values) => {
    return create({
        start: (listener) => {
            for (const value of values) {
                listener.next(value);
            }
            listener.complete();
        }
    });
};
