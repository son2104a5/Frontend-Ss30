function sapxep(){
    let arr = [1,33,5,653,8,'d','t','g','u','v','!','%','*','#','&'];
    let subArr = [];
    for(let i=0;i<arr.length;i++){
        if(isFinite(arr[i])){
            subArr.push(arr[i]);
        }
    }
    for(let i=0;i<arr.length;i++){
        if((arr[i]>='!'&&arr[i]<='/')||(arr[i]>=':'&&arr[i]<='@')||(arr[i]>='['&&arr[i]<='`')||(arr[i]>='|'&&arr[i]<='~')){
            subArr.push(arr[i]);
        }else if((arr[i]>='a'&&arr[i]<='z')||(arr[i]>='A'&&arr[i]<='Z')){
            subArr.unshift(arr[i]);
        }
    }
    console.log(subArr);
}

sapxep();