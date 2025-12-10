while(true)
{   
        let num = parseInt(prompt("Enter a number : "));
        let count = 0;
        if ( num == 1)
        {
            console.log("1 is neither prime nor composite.");
        }
        else 
        {
            for ( i = 1 ; i <= num ; i ++)
            {
                if (num % i == 0)
                {
                    count = count+1;
                }
            }
            if (count == 2)
            {
                console.log(`${num} is a Prime number.`);
            }
            else 
            {
                console.log(`${num} is a Composite number.`);
            }   
        }
        let ask = prompt("Want to do again?\nPress y = Yes\nPress n =No\n:");
        
        if ((ask != "y") && (ask != "n"))
        {
            while(true)
            {
                console.log("You must enter either y or n.")
                ask = prompt("WANT to do again?\nPress y=Yes\nPress n = No\n:");
                if ((ask != "y") && (ask != "n"))
                {
                    continue;
                }
                break;
            }
        }
        if (ask == "n")
        {
            break;
        }
        if(ask == "y")
        {
            continue;
        }
}












