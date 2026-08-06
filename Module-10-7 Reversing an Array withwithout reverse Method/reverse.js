const numbers = [46, 48, 39, 46, 52];
console.log(numbers);
const numbersInReverse = [];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    numbersInReverse.unshift(numbers[i]);
    console.log(numbersInReverse);    
}
console.log();

const reversedNumbers = numbers.reverse();
console.log('The reversed array of numbers are',reversedNumbers);
console.log();

const friends = ['Abul', 'Babul', 'Cabul', 'Dabul', 'Kabul'];
const friendsInReverse = [];

for(const friend of friends){
    console.log(friend);
    friendsInReverse.unshift(friend);
    console.log(friendsInReverse);
}
console.log();

const serialNumbers = [1, 2, 3, 4, 5];
const reversedSerialNumbers = [];

for(let i = (serialNumbers.length - 1); i >= 0; i--){
    reversedSerialNumbers.push(serialNumbers[i]);
}
console.log(reversedSerialNumbers);

