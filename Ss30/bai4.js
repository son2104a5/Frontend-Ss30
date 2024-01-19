function primal(){
    let arr = [1,2,3,5,7,9,10,15,11,19,16,22,25,23];
    let prime=0;
    console.log('Các số nguyên tố có trong mảng là:');
    for(let i=0;i<arr.length;i++){
        for(let j=1;j<=arr[i];j++){
            if(arr[i]%j===0){
                prime++;
            }
        }
        if(prime===2){
            console.log(arr[i]);
        }
        prime=0;
    }
}

primal();