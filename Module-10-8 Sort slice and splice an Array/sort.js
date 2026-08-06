const digits = [4, 5, 2, 1, 8];
console.log(digits);

const sortedDigits = digits.sort();
console.log(sortedDigits);
console.log(digits); // this also changes the main array

const numbers = [2, 4, 26 , 88, 73, 69, 99];
console.log(numbers);

const sortedNumbers = numbers.sort();// doesn't work if the digit no is different 
console.log(sortedNumbers);

const fruits = ['Mango', 'Lychee', 'JackFruit', 'Papaya', 'Grape', 'Grapefruit'];
console.log(fruits.sort());// works for strings too
