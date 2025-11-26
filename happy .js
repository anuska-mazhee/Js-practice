let ask = true;
while(ask){
    let  x = parseInt(prompt("enter a num : "));
    let t = parseInt(prompt("how many times? : "));
    for(i=1;i<=t;i++){
        console.log(x,"x",i,"=",x*i);
    }
     ask  = prompt("do you want to do more?\npress y if yes : ");
    if(ask  != "y"){
        break;
    }
}