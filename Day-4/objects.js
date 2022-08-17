// what are objects:
//An object is a standalone entity, with properties and type. Compare it with a cup, 
//for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. 
//The same way, JavaScript objects can have properties, which define their characteristics.

const data ={
    Name: 'Deepak',
    Email: 'deepak@gmail.com',
    LastName: 'Sharma',
    FirstName: 'Jordan',
    Address: {
        Street: '123 Main Street',
        PlotNo: 43,

    }
}

//console.log(data.Email)
//console.log(Object.values(data))
//console.log(Object.keys(data))

//arrow function

//const arrow = (a,b) => {
//        console.log(a+b)  
//}
//arrow(1,2);

Object.keys(data).forEach((key) => {
    console.log(key + ':' + data[key])
});

/*Object.keys(data).forEach((key) => {
//console.log(key);
//console.log(data[key]);
})*/

/*let objarray= Object.keys[data];

for (let i=0; i< objarray; i++)
{
    console.log(objarray[i]);
}
*/

// Using for loop

/*for(const key of Object.keys(data))
{
    console.log(key + ': ' + data[key]);
}*/

/*const newarrr= Object.keys(data)
const newarr= Object.values(data)

for (let i=0; i< newarrr.length; i++)
for (let j=0; j< newarr.length; j++)
 {
    console.log(newarrr[i] + ':' +newarr[j]);
}*/


const A ={
    Name: 'Deepak Sharma' ,
    LastName: 'Deepak'   ,
    FirstName: 'Sharma',
    ThirdName: '--',
    EmailAddress : 'Deepak@123@gmail.com',
    ContactNumber: 804839322
}

for (const key of Object.keys(A)) {
    console.log(key + '->' + A[key]);

}

// Printing seprately
let arr1= Object.keys(A)
for(let i=0; i<arr1.length;i++){
    console.log(arr1[i])
}

let arr2=Object.values(A)
for(let i=0; i<arr2.length; i++){
    console.log(arr2[i])
}

