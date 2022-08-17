
// Program to check first letter if sentence is lower or upper

const name1 = ['Deepak', 'shubham', 'ayushi', 'Shivendra'];

function C(name1) {
name1.forEach(element => {
    if (element[0] == element[0].toUpperCase()) {
        console.log(element);
    }
})
}
C(name1);