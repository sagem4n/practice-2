// hello(wait);

// function hello(callback){
//     console.log("Hello!")
//     callback();
// }
// function wait(){
//     console.log("Wait!")
// }

// sum(displayPage, 1, 2);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }
// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;

// }
// function triple(element, index, array){
//     array[index] = element * 3;

// }

// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }


// function cube(element, index, array){
//     array[index] = Math.pow(element, 3);
// }

// function display(element){
//     console.log(element);
// }


// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(capitalize)
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function capitalize(element,index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1)
// }

// function display(element){
//     console.log(element);
// }


// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element){
//     return Math.pow(element, 2)
// }


// function cube(element){
//     return Math.pow(element, 3)
// }


// const students = ["Spongebob", "Patrik", "Yusuf", "Sandy"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);

// console.log(studentsLower);

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }

// const dates = ["2024-1-10","2024-2-20","2024-3-30"];
// const formattedDates = dates.map(formatDates);
// console.log(formattedDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return`${parts[1]}.${parts[2]}.${parts[0]}`;
// }




// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let evenNums = numbers.filteer(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }


// const ages = [16, 17, 18, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);

// console.log(children);

// function isAdult(element){
//     return element >= 18;
// }
// function isChild(element){
//     return element < 18;
// }




// const words = ["apple", "orange", "banana", "kiwi", "cocunt", "pomeranete"];
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getlongWords);

// console.log(shortWords);

// function getShortWords(element){
//     return element.length <= 6;
// }

// function getlongWords(element){
//     return element.length > 6;
// }









