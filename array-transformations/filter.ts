type Fn = (n: number, i: number) => any

function filter(array: number[], fn: Fn): number[] {
    const result: any[] = [];
    for (let i = 0; i < array.length; ++i) {
        if (fn(array[i], i)) {
            result.push(array[i]);
        }
    }

    return result;
}

/* .filter() */