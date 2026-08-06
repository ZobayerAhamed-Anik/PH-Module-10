let myArray1 = [23, 45, 67, 89, 74];
let hasItem = myArray1.includes(89);

if(hasItem){
    console.log('The array includes 89');
}
hasItem = myArray1.includes(100);
if(!hasItem){
    console.log('The array does not includes 100');
}