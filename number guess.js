let value = 15;
let num = Number(prompt("Guess the num : "));
let diff = value-num
if (diff === 0){
    console.log("Your guess is correct.");
}
else if ((diff<=5) && (diff>= -5)){
    console.log("you are quite close. ");
}
else{
    console.log("you are far.");
}