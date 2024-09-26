function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    for (const [index, value] of arr.entries()) {
        arr[index] = fn(value, index);
    }
    return arr;
}

/* .map() */