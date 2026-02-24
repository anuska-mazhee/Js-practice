const fruits = ["apple", "banana", "mango", "litchi", "orange"];
const capital = () => {
    const array = [];
    for(const fruit of fruits){
        array.push(fruit.toUpperCase()); 
    }
    return array;
};
console.log(capital());


    