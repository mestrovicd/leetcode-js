type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: function (val2: any): boolean {
            if (val === val2) {
                return true;
            }

            throw new Error("Not Equal");
        },
        notToBe: function (val2: any): boolean {
            if (val !== val2) {
                return true;
            }

            throw new Error("Equal");
        }
    }
}


/*
expect(5).toBe(5); // true
expect(5).toBe(4); // throws "Not equal"

expect(5).notToBe(5); // throws "Equal"
expect(5).notToBe(4); // true
*/
