interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        const key = fn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
}

/*
Input:
array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
],
fn = function (item) {
  return item.id;
}

Output:
{
  "1": [{"id": "1"}, {"id": "1"}],
  "2": [{"id": "2"}]
}
* */