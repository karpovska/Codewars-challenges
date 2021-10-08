/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/ 
let arr = [10, 12, 65, 4, 11]; 

function sumTwoSmallestNumbers(numbers) {  
    let sortedArr = numbers.sort((a, b) => a - b );
    return sortedArr[0] + sortedArr[1];    
}

console.log(sumTwoSmallestNumbers(arr));