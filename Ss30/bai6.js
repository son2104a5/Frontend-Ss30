function checkTriangle(){
    let arrA = [4, 6, 3, 7];
    let a,b,c,count=0;
    let arrB = [];
    for(let i=0;i<arrA.length;i++){
        arrB = [];
        a = arrA[i];
        for(let j=i+1;j<arrA.length;j++){
            b = arrA[j];
            for(let k=j+1;k<arrA.length;k++){
                c = arrA[k];
                if(a+b>c&&a+c>b&&b+c>a){
                    count++;
                }
            }
        }  
    }
    console.log(count);
}

checkTriangle();