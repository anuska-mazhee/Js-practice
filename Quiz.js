//WAP to make a small quiz game.
console.log("Hello Friend!\nLet's Play a fun Quiz game.\nBut first let me know your name. ");
let name = prompt("Your name : ");
console.log(`let's get started ${name}.`);
console.log("\n");
while(true)
{
    let ans1 = prompt("Question no 1\nHow many bones are in adult human body?\n1.260        2.306       3.206\nChoose 1 or 2 or 3: ");
    if((ans1 != 1) && (ans1 != 2) && (ans1 != 3))
    {
        console.log("You must press either 1 or 2 or 3 only."); 
        continue;
    }
    else if(ans1 == 3)
    {
        x = 10;
        break;
    }
    else
    {
        x = 0;
        break;
    }
}
console.log("\n");
while(true)
{
    let ans2 = prompt("Question no 2\nHow many colors are in Rainbow?\n1.Six        2.Seven    3.Eight\nChoose : ");
    if((ans2 !=1) && (ans2 !=2) && (ans2 != 3))
    {
        console.log("You must press either 1 or 2 or 3 only.");
        continue;
    }
    else if(ans2 == 2)
    {
        x += 10;
        break;
    }
    else 
    {
        x = 0;
        break;
    }
}
console.log(`Congrats!!\nYou scored`,x);


