//1. Combine two arrays into one new array. Log the result. 
let numbers1 = [23, 45, 38, 69, 36];
let numbers2 = [50, 94, 100];
let numbers3 = numbers1.concat(numbers2);
console.log(numbers3);

//2. Take a portion of an array (not the whole thing) without changing the original. Log the results.
let slicedNumbers1 = numbers1.slice(1, 4);
console.log(slicedNumbers1);
console.log(numbers1);

//3. Turn an array of words into a single sentence string. 
let words = ['Apple', 'Ball', 'Cat'];
console.log(words.join(' '));

//4. Check two variables (one array, one not) and log whether each is an array. 
let fruit = 'Mango';
let fruits = ['Mango', 'Orange', 'Lichee'];
console.log(Array.isArray(fruit));
console.log(Array.isArray(fruits));

//5. Reverse an array of at least 5 items. Log the result. 
console.log(numbers1);
console.log(numbers1.reverse());

//6. Sort an array of names alphabetically. Log the result. 
let names = ['Mishuk', 'Ashuk', 'Sashuk', 'Lajuk'];
console.log(names);
console.log(names.sort());

//7. Sort an array of names alphabetically. Log the result. 
const original = [40, 100, 1, 5, 25, 10];
const sorted = original.toSorted((a, b) => a - b);
console.log(sorted);   // [1, 5, 10, 25, 40, 100]
console.log(original); // [40, 100, 1, 5, 25, 10]

//8. Given an array of numbers, log only the values greater than 10, using a loop. 
let numbers = [6, 8 , 12, 34, 7 , 8];
for(let number of numbers){
    if(number > 10){
        console.log(number);
    }
}

//9. Given an array of numbers, calculate and log the total sum, using a loop. 
numbers = [45, 50, 35];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);