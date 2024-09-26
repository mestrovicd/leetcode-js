type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    const tId: number = setTimeout((): void => {
        fn(...args)
    }, t);

    return function cancelFn(): void {
        clearTimeout(tId);
    }
}

/*
* Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
* After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
* */