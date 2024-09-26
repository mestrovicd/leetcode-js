type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    let called: boolean = false;
    return function (...args) {
        if (called) {
            return;
        }

        called = true;

        return fn(...args);
    };
}

/*
* allows the function to be called only once
* */