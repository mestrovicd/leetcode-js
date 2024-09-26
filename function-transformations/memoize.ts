type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache: Map<any, any> = new Map();
    let cc: number = 0;

    return function(...args) {
        const key: string = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        cc++;
        const res: number = fn(...args);
        cache.set(key, res);

        return res;
    }
}

/*
* A memoized function is a function that will never be called twice with the same inputs,
* instead it will return a cached value.
* */