type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const idMap: { [key: number]: any } = {};

    for (const obj of arr1) {
        idMap[obj.id] = {...obj};
    }

    for (const obj of arr2) {
        if (idMap[obj.id]) {
            idMap[obj.id] = {...idMap[obj.id], ...obj};
            continue;
        }

        idMap[obj.id] = {...obj};
    }

    return Object.values(idMap).sort((a, b) => a.id - b.id);
}

/*
Input:
arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
],
arr2 = [
    {"id": 3, "x": 5}
]

Output:
[
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
]
* */