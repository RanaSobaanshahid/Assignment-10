// 9. Write a js program to print all perfect numbers between given interval using functions.
// 16. Write a js program to check whether a number is palindrome or not using function.

// print all numbers 
// for loop nexted 
//  

function perfect_number() {
    let num = 100;
        let sum =0;
for (let perfect = 1; perfect < num; perfect++) {
//    console.log(perfect);
   for (let i = perfect; i <= num/2; i++) {
       if(num%i==0){
        sum = sum+i;
   }
    
}
}
if (sum==num) {
  return "number is perfect";
}else{
    return "number is not perfect"
}
}
perfect_number();