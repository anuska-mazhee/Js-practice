let num = parseInt(prompt("Enter a number:"));
let add =0, rem;
 while(num != 0)
 {
     rem = num %10;
     add += rem;
     num = parseInt(num /10);
 }
 console.log(add);