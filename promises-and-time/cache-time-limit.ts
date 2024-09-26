class TimeLimitedCache {

    private cache = new Map<number, {value: number, exp: number}>();

    constructor() {
        this.cache = new Map();
    }

    set(key: number, value: number, duration: number): boolean {
        const currTime: number = Date.now();
        const expDate: number = currTime + duration;

        if (this.cache.has(key)) {
            const existingEntry: {exp: number, value: number} = this.cache.get(key);
            if (existingEntry?.exp > currTime) {
                this.cache.set(key, {value: value, exp: expDate});
                return true;
            }
        }

        this.cache.set(key, {value:value, exp: expDate});
        return false;
    }

    get(key: number): number {
        const currTime: number = Date.now();
        const entry: {exp: number, value: number} = this.cache.get(key);

        if (entry?.exp > currTime) {
            return entry.value;
        }

        return -1;
    }

    count(): number {
        const currTime: number = Date.now();
        let active: number = 0;

        for (const [key, {exp}] of this.cache) {
            if (exp > currTime) {
                active++;
            }
        }

        return active;
    }
}