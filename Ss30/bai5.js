function uppercase(){
    let string = 'Hello World';
    let x;
    for(let i=0;i<=string.length;i++){
        if(i==' '||i==undefined){
            x = string.charAt(i-1);
            console.log(x);
        }
        
    }
    // console.log(string);
}

uppercase();