// Fucntions are expressions that can be assigned and called 

function bartFunc(name) {
    return "what's up " + name
}

let greeting = bartFunc('bartel');

console.log(greeting);

let bartfunc1 = function(name1) {
    return "what's up " + name1
}

let greeting1 = bartfunc1('bartel1')

console.log(greeting1);

// abstracting with labels

let add = function(num0, num00) {
    return num0 + num00
}
console.log(add(1, 7));


let subtract = (num1, num2) => num1 - num2;
console.log(subtract(5, 1));

let calc = function(num4, num5, operation) {
    return operation(num4, num5)
}
// operation is a placeholder/parameter for calling back a previous function and using it

        let subResult = calc(10, 5, subtract);
        console.log(subResult);

        let addResult = calc(10, 5, add);
        console.log(addResult);

// function holding another function from previous
// array.forEach()
// both of these below are anon functs

        let arr = [1, 2, 3, 4, 5, 6, 7];
        arr.forEach(element => {
            console.log(element);
        })

        arr.forEach(function(element) {
            console.log(element);
        })

        let newArr = arr.map(x => x * 5);
        console.log(newArr);

// this is basically an if statement
        let thirdArr = arr.filter(function(x) {
            // return x > 3; gives everything greater than 3
            return x % 2 != 0; //gives odd numbers
            
        });
        console.log(thirdArr);

// for each element in the array do this function 
        let fourthArr = arr.forEach(x => {
            if (x % 2 == 0) {
                console.log(`${x} is even`);
            } else {
                console.log(`${x} is odd`);
            }
        })


// sort method-- 
        let fifthArr = [1, 3, 2, 0, 4, 5];

        fifthArr.sort(function(a, b) {
            if (a - b > 0) {
                return -1; 
            } else if (a - b < 0) {
                return 1; 
            } else {
                return 0;
                    }
        });
        // console.log(fifthArr);

        // acc is an accumulator and el is the element of the array. then can use th operator to of choice here is addition
        // just look at the docs and use the parameter names that are in the methods docs
        // these methods are function and they are CALLBACKS!
        // 
        let result = fifthArr.reduce(function (acc, el) {
            return acc + el;
        });
        console.log(result);
