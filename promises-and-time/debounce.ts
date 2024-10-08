type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let tId = null;

    return function(...args: number[]): void {
        if (!!tId) {
            clearTimeout(tId);
        }

        tId = setTimeout(() => fn(...args), t);
    }
}

/*
* A debounced function is a function whose execution is delayed by t milliseconds
* and whose execution is cancelled if it is called again within that window of time.
* The debounced function should also receive the passed parameters.
* */