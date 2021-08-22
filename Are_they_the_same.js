/* INSTRUCTIONS
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
that checks whether the two arrays have the "same" elements, with the same multiplicities. 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*/

a1 = [9, 5, 0, 0, 8, 5, 0, 2, 10, 7, 6, 2, 3, 7, 10];
a2 = [101, 36, 9, 25, 4, 49, 64, 100, 4, 25, 0, 81, 0, 49, 0];

function comp(array1, array2){
    try{
        return array2.every(num => array1.includes(Math.sqrt(num)));    
      }
      catch(err){}
}
  
console.log(comp(a1,a2));