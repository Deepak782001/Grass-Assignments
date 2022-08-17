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