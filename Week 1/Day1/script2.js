console.log("start");
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve()
.then(() => console.log('Promise 1'))
.then(() => console.log('Promise 2'));
queueMicrotask(() => console.log('MicroTask'));
console.log('End');