let numberStore = [0, 1, 2];
let newNumber = 3;

console.log([...numberStore,...[newNumber]]);

//or

numberStore = [...numberStore,3];
console.log(numberStore);