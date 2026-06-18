var globalVar = 'Global';
function outer(){
    var outerVar = 'Outer';

    function inner(){
        var innerVar = 'Inner';
        console.log(globalVar, outerVar, innerVar);

    }
    inner();
}
outer();