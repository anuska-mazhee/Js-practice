for(i=1;i<=5;i++)
{
    let x = "";
    for(j=1;j<=(5-i);j++)
    {
        x += " ";
    }
    let y = "";
    for(j=1;j<=i;j++)
    {
        y += "*";
    }
    console.log(x,y);
    console.log("\n");
}