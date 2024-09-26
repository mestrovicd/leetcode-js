class ArrayWrapper {
    private arr: number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }

    valueOf() {
        return this.arr.reduce((acc, curr) => acc + curr, 0);
    }

    toString(): string {
        return `[${this.arr.join(',')}]`;
    }
}

/*
When two instances of this class are added together with the + operator,
the resulting value is the sum of all the elements in both arrays.

When the String() function is called on the instance,
it will return a comma separated string surrounded by brackets.
For example, [1,2,3].
* */