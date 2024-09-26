type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: JSONValue): JSONValue {
    if (Array.isArray(obj)) {
        return obj
            .map(compactObject)
            .filter(Boolean);
    } else if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj)
                .map(([key, value]) => [key, compactObject(value)])
                .filter(([_, value]) => Boolean(value))
        );
    }

    return obj;
}

/* removed falsy values */