const multiply = (a,b,callback) => {
    let m = a*b;
    callback(m);
};
const result = m => {
    console.log("Result = " + m);
};
multiply(4,4,result);