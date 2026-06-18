console.log('A');
Promise.resolve().then(() => console.log('B'));
queueMicrotask(() => console.log('C'));
setTimeout(() => {
    console.log('D');
}, 1000);