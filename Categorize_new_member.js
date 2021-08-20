testArr = [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];

function openOrSenior(data){
    let isSenior = data.map(m => {
      if(m[0] >= 55 && m[1] >= 7)
        return "Senior"
      else 
        return "Open"
    })
    console.log(isSenior);
  }

openOrSenior(testArr);

