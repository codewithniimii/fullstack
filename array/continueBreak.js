function skipNumber(number){
    let evenNumbers = [    ]
     
    for(let i=0; i++ ){
        if(i % 2== 1){
            continue
        }

        if(i==number){
            continue
        }

        evenNumbers.push(i)
    }
        return evenNumbers
    
}



/*
========================================
        JavaScript - break & continue
========================================
*/

// 1. Using `break` in a for loop
console.log("Example: break in a for loop");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at:", i);
        break;  // Exits the loop when i is 5
    }
    console.log(i);
}
/*
Output:
1
2
3
4
Breaking at: 5
*/

// 2. Using `break` in a while loop
console.log("\nExample: break in a while loop");
let num = 1;
while (num <= 10) {
    if (num === 7) {
        console.log("Stopped at:", num);
        break;  // Exits loop at num = 7
    }
    console.log(num);
    num++;
}
/*
Output:
1
2
3
4
5
6
Stopped at: 7
*/

// 3. Using `continue` in a for loop
console.log("\nExample: continue in a for loop");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping:", i);
        continue;  // Skips iteration when i is 3
    }
    console.log(i);
}
/*
Output:
1
2
Skipping: 3
4
5
*/

// 4. Using `continue` in a while loop
console.log("\nExample: continue in a while loop");
let n = 0;
while (n < 10) {
    n++;
    if (n % 2 === 0) {
        continue;  // Skip even numbers
    }
    console.log(n);
}
/*
Output:
1
3
5
7
9
*/

// 5. Using `break` in a nested loop
console.log("\nExample: break in a nested loop");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            break;  // Only exits the inner loop
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
/*
Output:
i = 1, j = 1
i = 2, j = 1
i = 3, j = 1
*/

// 6. Using `break` to exit multiple loops (labels)
console.log("\nExample: break with labels");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            console.log("Breaking both loops at j =", j);
            break outerLoop;  // Exits both loops
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
/*
Output:
i = 1, j = 1
Breaking both loops at j = 2
*/

// 7. Using `continue` in a nested loop
console.log("\nExample: continue in a nested loop");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            console.log(`Skipping j = ${j} for i = ${i}`);
            continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
/*
Output:
i = 1, j = 1
Skipping j = 2 for i = 1
i = 1, j = 3
i = 2, j = 1
Skipping j = 2 for i = 2
i = 2, j = 3
i = 3, j = 1
Skipping j = 2 for i = 3
i = 3, j = 3
*/

// Summary of `break` vs `continue`
/*
| Use Case                  | Use `break`   | Use `continue` |
|--------------------------|-------------|--------------|
| Stop loop completely    | ✅           | ❌           |
| Skip specific iterations | ❌           | ✅           |
| Searching in an array    | ✅           | ❌           |
| Filtering values         | ❌           | ✅           |
*/

