export class Subject {
    private observers: any[];

    constructor() {
        this.observers = [];
    }

    public addObserver(observer: any) {
        this.observers.push(observer);
    }

    public getObservers() {
        return this.observers;
    }

    public notify(notification: any) {
        for(let observer of this.observers) {
            observer.notify(notification);
        }
    }
}
