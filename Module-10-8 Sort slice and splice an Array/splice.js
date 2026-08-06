const numbers = [23, 45, 26 , 88, 73, 69, 99];
console.log(numbers);

const splicedNumbers = numbers.splice(2,3);
console.log(splicedNumbers);
console.log(numbers); // splice() cuts the main array

const editedNumbers = numbers.splice(2, 3, 3, 4, 5);// splicing and replacing with other numbers
console.log(numbers);