function num(n,m)
{
    let q = Math.floor(n/m);
    
    let lower = m*q;
    let upper = m*(q+1);
    
    if(Math.abs(n-lower) <= Math.abs(n-upper))
    {
        return lower;
    }
    else
    {
        return upper;
    }
    
}
let n = 25;
let m = 8;
console.log(num(n,m));