type F = (x: number) => number;

function compose(functions: F[]): F {

    return function(x: number) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
}

/*
* The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
* */