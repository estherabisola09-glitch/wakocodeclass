// Task 1
function addNumbers(a, b) {
  return a + b;
}

const result1 = addNumbers(5, 7);
console.log(result1);

// Task 2
function calculateArea(width, height) {
  return width * height;
}

const rectangleWidth = 5;
const rectangleHeight = 10;
const area = calculateArea(rectangleWidth, rectangleHeight);
console.log(`The area of the rectangle is: ${area}`);

// Task 3
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Alice');

const personName = 'Bob'; // ✅ FIX: define personName before using it
greet(personName);

// Task 4
const numbers = [1, 2, 3, 4, 5];

function doubleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
}

doubleArray(numbers);
console.log(numbers);

// ✅ FIX: removed nonExistentVariable (or define it if needed)
// const nonExistentVariable = "Now I exist!";
// console.log(nonExistentVariable);

// Task 5
function sumNumbers(a, b) {
  return Number(a) + Number(b); // ✅ FIX: ensure both are numbers
}

const num1 = 5;
const num2 = '2';
const result2 = sumNumbers(num1, num2);
console.log(result2);

// Task 6
function multiply(a, b) {
  return Number(a) * Number(b); // safe numeric conversion
}

const result3 = multiply(5, '2');
console.log(result3);

// Task 7
const students = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 18 },
];

// Task 8
function calculateAverageAge(studentList) {
  let totalAge = 0;

  for (let i = 0; i < studentList.length; i++) {
    totalAge += studentList[i].age;
  }

  return totalAge / studentList.length;
}

const averageAge = calculateAverageAge(students);
console.log(averageAge);

