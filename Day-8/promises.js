/* let promises = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(console.log('Promise resolved'));
        }, 2000);

})

console.log(promises);


let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(console.log('Internal 404 error'));
    }, 2000);
    })

console.log(promise);*/

// promises with async await

const axios = require('axios');

async function fetchdata() {
try{
    const a = await axios.get();
    console.log(a);
} catch (error) {
    console.log('404-error)')
}
}

fetchdata();
