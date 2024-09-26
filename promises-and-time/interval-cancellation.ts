type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    fn(...args);
    const iId: number = setInterval(() => fn(...args), t);

    return cancelFn => clearInterval(iId);
}

/*
* Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
* After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
* */