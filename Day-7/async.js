 // async function


 /*function x() {
    setTimeout(() => {
        return "Hello"
    }, 2000);   
 }
 
 async function add(a,b){
    const arr=[];
    const res = x()
    arr.push(res);

     console.log(arr);
}
add(3,4);


async function addd(a,b){
    await console.log(a+b);
    console.log(b);
}
addd(3,4);*/


// Fetch 

const axios = require('axios');


async function fetchData() {
    const resposnse = await axios.get('https://jsonplaceholder.typicode.com/users');
    // const resJson = await resposnse.json();
    console.log(resposnse);
}
fetchData();
