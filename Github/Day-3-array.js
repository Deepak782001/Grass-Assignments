// What is array?
//An array is a variable that can store multiple values. 
//For example, if you want to store 100 integers, you can create an array for it. int data[100];

let arr = [1,2,3,4,5,6];
let hello = [10,20,30];

    console.log(arr);
    console.log(hello);
    
// concatination
    let a = arr.concat(hello);
    console.log(a);
    
// Push

hello.push(8);
console.log(hello);

// Pop

hello.pop(8);
console.log(hello);

//Remove elements in array

let name = ["Shubham","Shivendra","harsh","Priyanka"]
name.splice(0,2);
console.log(name)

//Adding elements in between array

let names = ["Shubham","Shivendra","harsh","Priyanka"]
names.splice(2,0,"Deepak","Ayushi");
console.log(names)

//Example slices out a part of an array starting from array element 1

let cars =["VW","SKODA","MG","TOYOTA","BMW"]
let newcars = cars.slice(1)

console.log(newcars);

// For loop array

let no =[1,2,3,4,5,6,7,8];

    for (let i=0; i<no.length; i++)

console.log(no[i])
