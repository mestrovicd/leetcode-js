type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    return !(typeof obj === 'object' && Object.keys(obj).length > 0);
}