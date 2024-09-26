type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
    private readonly events: Record<string, Function[]>;

    constructor() {
        this.events = {};
    }

    subscribe(eventName: string, callback: Callback): Subscription {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);

        return {
            unsubscribe: (): void => {
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
                if (this.events[eventName].length === 0) {
                    delete this.events[eventName];
                }
            }
        };
    }

    emit(eventName: string, args: any[] = []): any[] {
        if (!this.events[eventName]) {
            return [];
        }

        return this.events[eventName].map(callback => callback(...args));
    }
}

/* subscribing to events and emitting them */