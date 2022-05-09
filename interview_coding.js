function isPalindrome(str) {
    let strArr = str.split('');
    console.log(strArr);
    let unique = [strArr[0]];
    console.log(unique)
    for (let i = 1; i < strArr.length; i++){
        console.log(unique);
        console.log(strArr);
        if(unique.indexOf(strArr[i] < 0)){
            unique.push(strArr[i]);
        }
        /*unique = strArr.map (char => {
            console.log(char);
            if(strArr.indexOf(char) < 0){
              console.log("here");
                unique.push(char);
              
            }        
        });*/
    }
    
    console.log(unique);
}

isPalindrome("abab");