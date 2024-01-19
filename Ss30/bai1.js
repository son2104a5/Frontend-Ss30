function doixung(){
    let count=0;
    let arr = [1, 2, 3, 2, 1];
    for(let i=0;i<Math.floor(arr.length/2);i++){
        if(arr[i]===arr[arr.length-i-1]){
            count++;
        }
    }
    if(count===Math.floor(arr.length/2)){
        console.log(true);
    }else{
        console.log(false);
    }
}

doixung();