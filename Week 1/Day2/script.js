// Problem: All callbacks reference the same 'i'
// Function scoped
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// block scoped
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// IIFE(Immediately invocked function expression)
for (var i = 0; i < 3; i++) {
  (function (index) {
    setTimeout(function () {
      console.log(index);
    }, 1000);
  })(i);
}
