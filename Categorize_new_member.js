testArr = [[18, 20],[65, 10],[61, 12],[37, 6],[21, 21],[78, 9]];

function openOrSenior(data){
    let isSenior = data.map(m => (m[0] >= 55 && m[1] > 7) ? "Senior" : " Open");
    console.log(isSenior);
  }
openOrSenior(testArr);

