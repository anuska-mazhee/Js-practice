let x = "aaabbccc";
let temp = "";
let count = "";
let output ="";
for(let char of x)
{
    if(char!=temp)
    {
        temp = char;
        output = output + count;
        count = 1;
        output = output + temp;
    }
    else 
    {
        count += 1;
    }
}
console.log(output+count);
/*Output
a3b2c3*/