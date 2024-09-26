type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async function(...args: any[]) {
        const timeoutPromise: Promise<unknown> = new Promise((_, reject): void => {
            setTimeout((): void => {
                reject('Time Limit Exceeded');
            }, t);
        });

        return Promise.race([fn(...args), timeoutPromise]);
    }
}

/*
* If the execution of the fn exceeds the time limit,
* the time limited function should reject with "Time Limit Exceeded"
* */