function factorial(a)
{
    let f = 1;
    for(let i=1;i<=a;i++)
    {
        f *= i;
    }
    console.log(`Factorial of ${a} is ${f}`);
}
factorial(3);