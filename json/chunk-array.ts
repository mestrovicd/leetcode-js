type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const result: any[] = [];

    for (let i = 0; i < arr.length; i+= size) {
        const chunk: Obj[] = arr.slice(i, i + size);
        result.push(chunk);
    }

    return result;
}

/*
* Input: arr = [1,9,6,3,2], (chunk) size = 3
* Output: [[1,9,6],[3,2]]
* */