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