
/*

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureExample = outerFunction(); // Calling outerFunction returns innerFunction
closureExample(); // This will log: "I am from outer function"

*/

function counter() {
    let count = 0;
    return function() {
        count++;
        console.log('Counter:', count);
    };
}

const increment = counter();
increment(); // Output: Counter: 1
increment(); // Output: Counter: 2
increment()
increment()