function sOdd(){
    let sum=0;
    let n = +prompt("nhập n");
    for(let i=0;i<=n;i++){
        if(sum%2!=0&&i==n-1){
            break;
        }else if(i%2!=0){
            sum+=i;
        }
    }
    console.log(sum);
}

sOdd();