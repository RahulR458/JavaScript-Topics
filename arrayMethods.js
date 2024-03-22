let numbers = [1, 2, 3, 4, 5];

// Concatenate arrays
const concatenatedNumbers = numbers.concat([6, 7]);
console.log(concatenatedNumbers);  // [1, 2, 3, 4, 5, 6, 7]

// Join array elements with a delimiter
const joinedNumbers = numbers.join("-");
console.log(joinedNumbers);  // "1-2-3-4-5"

// Find the index of an element
const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree);  // 2

// Find the last index of an element
const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree);  // 2

// Check if an array includes an element
const includesThree = numbers.includes(3);
console.log(includesThree);  // true

// Create a shallow copy of a portion of the array
const slicedNumbers = numbers.slice(1, 4);
console.log(slicedNumbers);  // [2, 3, 4]

// Remove and/or add elements from/to an array
const splicedNumbers = numbers.splice(2, 2, 10, 11);
console.log(splicedNumbers);  // [3, 4]
console.log(numbers);  // [1, 2, 10, 11, 5]

// Add an element to the end of the array
const newLengthAfterPush = numbers.push(6);
console.log(newLengthAfterPush);  // 6

// Remove the last element from the array
const poppedElement = numbers.pop();
console.log(poppedElement);  // 6
console.log(numbers);  // [1, 2, 10, 11, 5]

// Remove the first element from the array
const shiftedElement = numbers.shift();
console.log(shiftedElement);  // 1
console.log(numbers);  // [2, 10, 11, 5]

// Add an element to the beginning of the array
const newLengthAfterUnshift = numbers.unshift(0);
console.log(newLengthAfterUnshift);  // 5
console.log(numbers);  // [0, 2, 10, 11, 5]

// Reverse the order of elements in the array
const reversedNumbers = numbers.reverse();
console.log(reversedNumbers);  // [5, 11, 10, 2, 0]

// Sort the elements of the array numerically
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);  // [0, 2, 5, 10, 11]

// Create a new array with elements passing a test
const filteredNumbers = numbers.filter(num => num > 3);
console.log(filteredNumbers);  // [10, 11]

// Create a new array with the results of calling a provided function on every element
const mappedNumbers = numbers.map(num => num * 2);
console.log(mappedNumbers);  // [0, 20, 22, 4, 10]

// Reduce the array to a single value
const reducedNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log(reducedNumbers);  // 43

// Check if all elements pass a test
const everyCheck = numbers.every(num => num > 0);
console.log(everyCheck);  // false

// Check if any element passes a test
const someCheck = numbers.some(num => num > 10);
console.log(someCheck);  // true

// Execute a function for each array element
numbers.forEach(num => console.log(num));
// Logs each element in the array
