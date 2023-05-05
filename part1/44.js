function singHappyBirthday(){
    console.log("happy birthday to you ......");
}


// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// console.log(sumThreeNumbers(2,3,5));



// // isEven
// // input : 1 number 
// // output : true , false 
// function isEven(number){
//     return number % 2 === 0;
// }
// console.log(isEven(5));



// function 
// input : string 
// output: firstCharacter 
// function firstChar(anyString){
//     return anyString[2];
// }
// console.log(firstChar("zbc"));




// function 
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 2);
console.log(ans);