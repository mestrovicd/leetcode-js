type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let currVal = init;
    const initVal = init;

    return {
        increment: function (): number {
            return ++currVal;
        },
        decrement: function (): number {
            return --currVal;
        },
        reset: function(): number {
            currVal = initVal;
            return currVal;
        }
    }
}