const check = (num,callback) => {
    callback(num);
};
const result = (num) => {
    if(num % 2 ==0){
        console.log("Even number");
    }
    else{
        console.log("Odd number");
    }
};
check(5,result);
check(2,result);
