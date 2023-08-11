// //example of a function
// function sum(a, b)
// {
//     return a + b;
// }

// //example of a function expression
// const difference = (a, b) =>
// {
//     return a - b;
// }

// //example of exporting functions
// module.exports = {
//     sum,
//     difference
// };

//shorthand for export
// exports.multiply = (a, b) =>
// {
//     return a * b;
// }

//another way
// module.exports = {
//     multiply(a, b) { return a * b; },
//     divide(a, b) { return a / b; }
// }

//another way
module.exports = {
    multiply: (a, b) => { return a * b },
    sum: (a, b) => { return a + b },
    difference: (a, b) => { return a - b },
    divide: (a, b) => { return a / b },
    except: (diffMe, diffBy) => diffMe.split(diffBy).join('')
}