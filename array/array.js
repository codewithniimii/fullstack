let myFriends = []

function addMyFriends(friend) {
    myFriends.unshift(friend)   // push helps to push values to the end of the array
    console.log(myFriends)   // use unshift to push a value at the start of an array

}

addMyFriends('nimisha')
addMyFriends('minisha')
addMyFriends('lol')


console.log

/*
========================================
           JavaScript Arrays - Notes
========================================
*/

// 1. Creating an Array
let arr = [10, 20, 30, 40, 50];  // Array of numbers
let fruits = ["Apple", "Banana", "Cherry"];  // Array of strings

// 2. Accessing Elements
console.log(arr[0]);  // Output: 10
console.log(fruits[2]);  // Output: Cherry

// 3. Adding Elements
arr.push(60);  // Adds 60 at the end
arr.unshift(5);  // Adds 5 at the beginning
console.log(arr);  // Output: [5, 10, 20, 30, 40, 50, 60]

// 4. Removing Elements
arr.pop();  // Removes last element (60)
arr.shift();  // Removes first element (5)
console.log(arr);  // Output: [10, 20, 30, 40, 50]

// 5. Splicing - Adding/Removing from a specific index
arr.splice(2, 1);  // Removes 1 element at index 2 (removes 30)
console.log(arr);  // Output: [10, 20, 40, 50]

arr.splice(1, 0, 25);  // Inserts 25 at index 1
console.log(arr);  // Output: [10, 25, 20, 40, 50]

// 6. Finding Elements
console.log(arr.indexOf(40));  // Output: 3
console.log(arr.includes(50));  // Output: true

// 7. Sorting & Reversing
arr.sort();  // Sorts in ascending order
console.log(arr);  // Output: [10, 20, 25, 40, 50]

arr.reverse();  // Reverses the array
console.log(arr);  // Output: [50, 40, 25, 20, 10]

// 8. Looping Through an Array
arr.forEach((num) => console.log(num));  // Prints each element

// 9. Mapping (Transforming Elements)
let squared = arr.map(num => num * num);
console.log(squared);  // Output: [2500, 1600, 625, 400, 100]

// 10. Filtering (Extracting elements that meet a condition)
let filtered = arr.filter(num => num > 20);
console.log(filtered);  // Output: [50, 40, 25]

// 11. Reducing (Summing all elements)
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 145

// 12. Copying Arrays
let newArr = arr.slice();  // Creates a shallow copy

// 13. Joining Arrays
let moreNumbers = [60, 70, 80];
let combined = arr.concat(moreNumbers);
console.log(combined);  // Output: [50, 40, 25, 20, 10, 60, 70, 80]

// 14. Converting to String
console.log(arr.join(", "));  // Output: "50, 40, 25, 20, 10"

