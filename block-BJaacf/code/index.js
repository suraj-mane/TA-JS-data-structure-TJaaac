// 1. Create an array named numbers and store 5 number values in it
let number = [
    5,
    6,
    2,
    4,
    9,
];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (i = 0; i < number.length; i++){
    sum = sum + number[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let total = 0;
for(i = 0; i < number.length; i++){
    sum = sum + number[i];
    total = sum / number[i];
}
console.log(total);
// 4. Find the highest number in the array and print it to the console using console.log()
function largest(number){
    let highest = number[0];
    for(let i = 0; i < number.length; i++){
        if(number[i] > highest)
            highest = number[i];
    }
    return highest;
}
console.log(largest(number));
// 5. Find the lowest number in the array and print it to the console using console.log()
function lowest(number){
    let lower = number[0];
    for(let i = 0; i < number.length; i++){
        if(number[i] < lower){
            lower = number[i];
        }
    }
    return lower;
}
console.log(lowest(number));
// 6. Find the even numbers in the array and print them to the console using console.log()
function evenNumber(number){
    for(let i = 0; i < number.length; i++){
        if(number[i] % 2 === 0){
            console.log(number[i]);
        }
    }
}
evenNumber(number);
// 7. Find the odd numbers in the array and print them to the console using console.log()
function oddNumber(number){
    for(let i = 0; i < number.length; i++){
        if(number[i] % 2 !== 0){
            console.log(number[i]);
        }
    }
}
oddNumber(number);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
function divNumber(number){
    for(let i = 0; i < number.length; i++){
        if(number[i] % 5 == 0){
            console.log(number[i]);
        }
    }
}
divNumber(number);
// 9. Log all the element of the array one by one

// 10. Find all the number in the array that is divisible by 3
function divThreeNumber(number){
    for(let i = 0; i < number.length; i++){
        if(number[i] % 3 == 0){
            console.log(number[i]);
        }
    }
}
divThreeNumber(number);