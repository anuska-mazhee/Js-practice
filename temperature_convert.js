let value = Number(prompt("Enter the value : "));
let unit = prompt("Enter the above unit value\npress \n1=celsius\n2=fahrenheit\n3=kelvin\n");
let convert = prompt("Convert to which \n1=celsius\n2=fahrenheit\n3=kelvin\n");
if ((unit == "1") && (convert == "3")){
    console.log(`${value}c =`,value+273,`k`);
}
else if ((unit == "1") && (convert == "2")){
        console.log(`${value}c =`,(value*9/5)+32,`f`);
}
else if ((unit == "2") && (convert == "1")){
    console.log(`${value}f =`,(value-32)*5/9,`c`);
}
else if ((unit == "2") && (convert == "3")){
    console.log(`${value}f =`,(value+459.67)*5/9,`k`);
}
else if ((unit == "3") && (convert == "1")){
    console.log(`${value}k =`,value-273,`c`);
}
else if ((unit == "3") && (convert == "2")){
    console.log(`${value}k =`,value*1.8-459.67,`f`);
}
else{
    console.log("You need to convert to other units");
}
