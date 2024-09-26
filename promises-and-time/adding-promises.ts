type P = Promise<number>

async function addTwoPromises1(promise1: P, promise2: P): P {
    const [result1, result2] = await Promise.all([promise1, promise2]);
    return result1 + result2;
}

async function addTwoPromises2(promise1: P, promise2: P): P {
    return await (await promise1 + await promise2);
}