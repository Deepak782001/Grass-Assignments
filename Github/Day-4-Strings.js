const string= 'Deepak';
console.log(string);

for (let i=0; i<string.length; i++) {
    console.log(string[i]);

}

// Methods of strings

//1. JavaScript String slice() and substring


let A = "Dog,cat, horse";
console.log(A.slice(6,-4))
console.log(A.substring(0,4))


//2. Replacing

let B= "My name is deepak";
console.log(B.replace ("deepak","Sharma"))

//3. Split and join

let C= "Deepaksharma782001@gmail.com";
console.log(C.split('@').join(' + ').split('+'))

//4. to upper case and lower case

let D="HELLO";
let E="bye";
console.log(D.toLowerCase())
console.log(E.toUpperCase())

//5. Concat

let F="HELLO";
let G="how are you?";
let h= F.concat(G)

console.log(h)

//6. Trim method

let j="      hey    ";
console.log(j.trim())

//7. charAT

let i= "Deepak Sharma";
console.log(i.charAt(10))

