//1. Create an array with 3 items of your choice. Log it. 
let myArray = [35, 54, 47];
console.log(myArray);

//2. Log the length of the array from Task 1.
console.log(myArray.length);

//3. Log the item at index 0 and index 2 of the array. 
console.log(myArray[0], myArray[2]);

//4. Change the item at index 1 to a new value. Log the array
myArray[1] = 69;
console.log(myArray);

//5. Add one item to the end of the array. Log the array. 
myArray.push(78);
console.log(myArray);

//6. Remove the last item from the array. Log the array and the removed value. 
let lastItem = myArray.pop();
console.log(lastItem);
console.log(myArray);

//7. Add one item to the start of the array. Log the array. 
let addItem = myArray.unshift(25);
console.log(myArray);

//8. Remove the first item from the array. Log the array and the removed value.
let firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);

//9. Check whether the array contains a specific value. Log true or false. 
let hasItem = myArray.includes(50);
console.log(hasItem);

//10. Find the position of a specific value in the array. Log the number. 
console.log(myArray.indexOf(69));

//11. Loop through the array with a for loop and log each item. 
for(let myItem of myArray){
    console.log(myItem);
}

//12. Loop through the array with a while loop and log each item. 
console.log()
console.log('Using while loop: ')
let i = 0;
while(i < myArray.length){
    console.log(myArray[i]);
    i++;
}