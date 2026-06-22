// Bad: Creates global varible
function createLeak(){
    leakedVariable = 'I am global';
}
createLeak();
console.log(window, leakedVariable);

// Good use
`use strict`