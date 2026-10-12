// Function to run all operations on a given number
function playWithNumbers(num) {
    console.log("==============================");
    console.log('Number is:-', num);


    // Sum of first n natural numbers (1 + 2 + ... + n)
    let sumFirstN = 0;
    for (let i = 1; i <= num; i++) {
        sumFirstN += i;
    }
    console.log(`Sum of first ${num} numbers is: ${sumFirstN}`);


    // Multiplication table of n (up to 10)
    console.log(`Table of ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }


    //Check if it is a prime number
    let isPrime = true;
    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) { //Math.sqrt()--> it is a pre-defined function in JS that returns the square root
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    console.log(`Is ${num} a prime number? ${isPrime ? "Yes" : "No"}`);


    // Find and print all its factors
    let factors = [];   //this is an array
    for (let i = 1; i <= Math.abs(num); i++) {
        if (num % i === 0) {
            factors.push(i);    //push()--> is used to add elements at the end of the array
        }
    }
    console.log('Factors:', factors);


    // Sum of all digits
    let sum = 0;
    let n = Math.abs(num);  // Handles negative numbers
    while (n > 0) {
        sum += n % 10;                // Get the last digit
        n = Math.floor(n / 10);        // Drop the last digit
    }
    console.log(`Sum of digits of ${num} is ${sum}`);


    // Check if it is an Armstrong number (sum of digits cubed)
    let a = Math.abs(num);
    let armstrongSum = 0;
    while (a > 0) {
        let digit = a % 10;
        armstrongSum += digit ** 3;
        a = Math.floor(a / 10);
    }
    if (armstrongSum === num) {
        console.log(`${num} is an Armstrong number`)
    }
    else {
        console.log(`${num} is not an Armstrong number`)
    }

}

// Requirement: At least 5 different variables to test
playWithNumbers(153);
playWithNumbers(7);
playWithNumbers(370);
playWithNumbers(28);
playWithNumbers(139);