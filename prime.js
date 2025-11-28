//WAP to find prime and compostie number.
let num = parseInt(prompt("enter a num : "));
let count = 0;
//Handling for 1 cuz 1 is neither prime nor composite.
if (num == 1)
{
    console.log("Neither prime nor composite")
}
else//putting the else condition in nested loop because not a prime number  will appear.
{
    for (i = 1; i <= num; i ++){
        if(num % i == 0){
            count= count+1;
        }
    }
    if(count == 2)
        {
            console.log("Prime number.");
        }
    else
        {
            console.log("Not a prime number")
        }
}
