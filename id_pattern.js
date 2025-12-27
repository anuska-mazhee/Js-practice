for(i=1;i<=5;i++)
{
    let star ="";
    if(i<4)
    {
        for(j=1;j<=i;j++)
        {
            star += "*";
        }
    }

    else
    {
        for(j=1;j<=(6-i);j++)
        {
            star += "*";
        }
    }
    console.log(star);
}   

// Ouput

// *
// **
// ***
// **
// *
