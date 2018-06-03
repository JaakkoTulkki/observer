import {Subject} from "./subject";

describe('Subject', function () {
    function createSubject(): Subject {
        return new Subject();
    }

    let subject: Subject;
    beforeEach(() => {
        subject = createSubject();
    });

    it('should have zero observers by default', function () {
        expect(subject.getObservers().length).toEqual(0);
    });

    it('should add observers', function () {
        subject.addObserver({});
        expect(subject.getObservers().length).toEqual(1)
    });

    it('should notify observers notify method', function () {
        const observerOne = jest.fn()// {};
        const notify = jest.fn();
        observerOne.notify = notify;

        const observerTwo = {};
        const notifyTwo = jest.fn();
        observerTwo.notify = notifyTwo;

        subject.addObserver(observerOne);
        subject.addObserver(observerTwo);

        const notification = {message: 'chicken'};
        subject.notify(notification);

        expect(notify).toHaveBeenCalledWith(notification);
        expect(notifyTwo).toHaveBeenCalledWith(notification);
    });
});
