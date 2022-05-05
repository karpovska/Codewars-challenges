function reverseWords(str){
    return String(str).split(' ').reverse().join(' '); // reverse those words
  }

  console.log(reverseWords("I like bananas."));