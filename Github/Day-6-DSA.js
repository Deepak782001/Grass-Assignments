// Program to remove duplicate numbers from an array

const arr =  [10,20,30,40,50,10,20];

function removesame(arr) {
    const R =[];
    for (let i = 0; i < arr.length; i++) {
        if(!R.includes(arr[i])){
            R.push(arr[i]);
            console.log(R);
        }
        else{
            console.log(arr[i]);
        }

}
    console.log(R);
}


removesame(arr);

/// Program to print even odd numbers

const no = [10,20,45,78,65,88];

function even1(no) {
const even=[];
const odd=[];
for (let i=0; i<no.length; i++){
    if (no[i] % 2 == 0){
        even.push(no[i]);
        
    
    }
    else
    odd.push(no[i]);
}
console.log('even are ', even);
console.log('odd are ' ,odd);
}
even1(no);


// Program to seprate lower and upper case.

const names = ['a', 'B', 'c', 'D', 'e', ];

function letter(names) {
    const lowercase=[];
    const uppercase=[];

    names.forEach(element => {
        //console.log(elements);
        if (element == element.toLowerCase())
        {
            lowercase.push(element)
        }
        else  
        {
            
             uppercase.push(element)

        }

        
    })
        console.log(lowercase)
        console.log(uppercase)
}

letter(names);

module.exports ={letter};

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

