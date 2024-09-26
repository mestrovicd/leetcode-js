type MultiDimensionalArray = (number | MultiDimensionalArray)[];

function flat(arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    let result: any[] = [];
    for (let entry of arr) {
        if(Array.isArray(entry) && n > 0) {
            result.push(...flat(entry, n - 1));
        } else {
            result.push(entry);
        }
    }
    return result;
}

/* Array.flat() */
/* flattens to n levels */