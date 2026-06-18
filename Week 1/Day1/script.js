console.log('1: Synchronous');
setTimeout(() => {
    console.log('2: Macrotask (setTimeout)');
}, 0);

Promise.resolve().then(() => {
    console.log('3: Microtask (Promise)');
});

queueMicrotask(() => {
    console.log('4: Microtask (queueMicrotask)');
});

console.log('5: Synchronous');