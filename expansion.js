let x ="a6b5c8";
let output ="";
let index = 1;
let this_char ="";
for(let char of x)
{
    if(index %2 != 0)
    {
        output += char;
        this_char = char;
    }
    else
    {
        for(let i =1;i<Number(char);i++)
        {
            output += this_char;
        }
    }
    index += 1;
}
console.log(output);
// Output
// aaaaaabbbbbcccccccc
