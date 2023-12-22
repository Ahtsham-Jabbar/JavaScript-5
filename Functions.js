// function myFunction() {
//     console.log("Hello World");
//     console.log("Pakistan Zindaabad");
// }

// myFunction();


// function myFunction(x,y) {
//     console.log(x+y);
// }

// myFunction(5,5);


// function sum(x, y) {
//     s = x + y;
//     return s;
// }

// let result = sum(8, 14);
// console.log(result);

// function sum(x, y) {
//     return (x + y);
// }

// function multiply(x, y) {
//     return (x * y);
// }

// // arrow sum
// const sum = (x, y) => {
//     return (x + y);
// }

// console.log(sum(6, 6));

// // arrow multiply
// const multiply = (x, y) => {
//     return (x * y);
// }

// console.log(multiply(6, 6));


// function countVowels(str) {
//     let count = 0;  // Initialize count variable
//     for (const char of str) {
//         console.log(char);
//         // Check if the current character is a vowel
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);  // Print the count of vowels
// }

// countVowels("Hello");


// // arrow function

// const countVowels = (str) => {
//     let count = 0;  // Initialize count variable
//     for (const char of str) {
//         console.log(char);
//         // Check if the current character is a vowel
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count);  // Print the count of vowels
// }

// countVowels("Hello");


//arr.forEach Loop

// // let arr = [10, 20, 30, 40, 50];
// let arr = ["Uk", "USA", "UAE"];

// arr.forEach((val, indx, arr) => {
//     console.log(val.toUpperCase(), indx, arr);
// });


// // Practise Qstn

// let nums = [10, 20, 30, 40];

// nums.forEach((num) => {
//     console.log(num ** 2); // num*num
// });


// // map method
// let arr = [10, 20, 30, 40, 50];

// let newArray = arr.map((val) => {
//     return val;
// });
// console.log(newArray);



// // Filter method
// let arr = [10, 25, 30, 40, 50, 60];

// let newArray = arr.filter((val) => {

//     // return val % 2 !== 0;
//     return val > 30;
// });

// console.log(newArray);


// Reduce method

// let arr = [10, 20, 30, 40];

// let newArray = arr.reduce((prev, current) => {
//     return prev + current;
// });

// console.log(newArray);

// let arr = [10, 20, 30, 40];

// let newArray = arr.reduce((prev, current) => {
//     return prev < current ? prev : current;
// });

// console.log(newArray);

// Practise Qstn 1

// let marks = [10, 20, 30, 40, 100, 95];

// let newArray = marks.filter((val) => {
//     return val > 90;
// });

// console.log(newArray);


// Practise Qst 2

// let n = prompt("Enter the numbers");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// };

// console.log(arr);

// let newArray = arr.reduce((prev, curr) => {
//     return prev + curr;

// });

// console.log(newArray);

// let Array = arr.reduce((prev, curr) => {
//     return prev * curr;

// });

// console.log(Array);