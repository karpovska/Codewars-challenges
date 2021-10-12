/*
In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.
*/

function highAndLow(numbers){
    let numArr = numbers.split(" ");  
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}

console.log(highAndLow("-1 2 -3 5 -4"));