let num = prompt("enter num : ");
if (num == ""){
    console.log("you did not enter any num.");
}
else if (num %2 == 0){
    console.log("even num");
}
else if (num<0){
    console.log("negative num cant be processed.");
}
else{
    console.log("odd num");
}