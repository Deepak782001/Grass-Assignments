/* What is hoisting?
Variables and function are declare first and then description.

Variables > Function > Description  - in this format.

What is let , var and const?

Var- if we define then we can re defince again and again that's why we dont use this. This is not a scope variable.

Let- This is block scope variable and we can define it in funtion and redefine outside the function.

const - We can't re declare or change the value of this variable.   

What is event loop?

An event loop is something that pulls time taking function and place it into eventstack and pulls it after the completion of the function execution.

*/


// Time out function or we can say an example of Async function.

setTimeout(() => {
    console.log('2 Sec')
}, 5000);