let num1 = Number(prompt("Enter first num : "));
let num2 = Number(prompt("Enter second num : "));
if (num1>num2){
    console.log(`${num1} is greater than ${num2}by `,num1-num2 );
}
else if(num1===num2){
    console.log(`${num1} is equal to ${num2}`);
}
else{
    console.log(`${num2} is greater than ${num1} by`,num2-num1);
    
}

