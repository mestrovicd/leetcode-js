type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
        const results: T[] = [];
        let resCount: number = 0;

        if (functions.length === 0) {
            return resolve([]);
        }

        for (const [index, fn] of functions.entries()) {
            fn().then(result => {
                results[index] = result;
                resCount++;

                if (resCount === functions.length) {
                    resolve(results);
                }
            }).catch(err => {
                reject(err);
            });
        }
    });
}

/* Promise.all() */