// anonymous function has no name-- it is typically inside something else

        // let greet = function() {
        //     console.log("greetings!");
        // }
// calling a-functs usu-- can only call once initialized
        // greet();

        // setTimeout(function() {
        //     console.log("the anon funct has ran")
        // }, 4000);

        // function wait(howLong) {
        //     setTimeout(function() {
        //         console.log("that long"), howLong;
        //     })
        // }
        // wait(1000);
// the first parameter is the a funct and the second pararmeter is a timeout for x milliseconds
// look at the way you can now use the 

        // let wait2 = (howLong) => {
        //         console.log('I am an anon funct')
        //     }
// right-hand side of the function is the anon part-- the syntax is below
        // () => {};
// this is the arrow function

const array1 = [1, 2, 3, 4];

// pass this function to a map-- executes a function on EACH item in the array and CREATES A NEW ARRAY
// this will return implicitly-- no "return" needed. 
// this pushes a single index item through the function at a time. 
// x is the array item that is getting passed in-- you can call this anything
// check out array methods on MDN and act on arrays with them

const map1 = array1.map(x => x * 2);
console.log(map1);

// This is another way of writing and acting with this method
// use this to map over the data to understand how to render over the html???
// below if another anon func
const map2 = array1.map((elementOfArray) => {
    console.log("x or elementOfArray is", elementOfArray);
    return elementOfArray * 2
});
console.log(map2, array1);
