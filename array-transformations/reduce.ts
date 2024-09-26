type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let accumulator: number = init;

    for (const value of nums) {
        accumulator = fn(accumulator, value);
    }

    return accumulator;
}

/* .reduce() */