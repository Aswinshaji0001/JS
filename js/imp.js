
//when there is only one function

// import add from "./exp.js"

// console.log(add(5,5));

//when there is more than one function

// import {add,div,mul,sub} from "./exp.js"


// console.log(add(5,5));
// console.log(div(5,5));
// console.log(mul(5,5));
// console.log(sub(5,5));

//when there is more than one function another method

import * as op from "./exp.js"


console.log(op.add(5,5));
console.log(op.div(5,5));
console.log(op.mul(5,5));
console.log(op.sub(5,5));