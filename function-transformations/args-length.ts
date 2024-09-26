type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    let c: number = 0;
    for (const arg of args) {
        c++;
    }
    return c;
}

/*
* also return args.length
* */