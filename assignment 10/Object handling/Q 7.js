
// 7. Write a JavaScript program which returns a subset of a string.   

// Sample Data: dog

// Expected Output: ["d", "do", "dog", "o", "og", "g"];
// 10. Write a JavaScript program to sort an array of JavaScript objects.   

// Sample Object :



// var library = [ 

//    {

//        title:  'The Road Ahead',

//        author: 'Bill Gates',

//        libraryID: 1254

//    },

//    {

//        title: 'Walter Isaacson',

//        author: 'Steve Jobs',

//        libraryID: 4264

//    },


//    {

//        title: 'Walter Isaacson',

//        author: 'Steve Jobs',

//        libraryID: 4264

//    },

//    {

//        title: 'Mockingjay: The Final Book of The Hunger Games',

//        author: 'Suzanne Collins',

//        libraryID: 3245

//    }];
//    for (let i of  library) {
//     console.log(i);
//    }





// 11. Write a JavaScript function to print all the methods in an JavaScript object.   

// Test Data :

//  console.log(all_properties(Array));

// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"];

// let all_properties={

//    Array : ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"],
// }
// console.log(all_properties.Array);



// 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// let object = {
//     name :'sami',
//     rollno :23,
//     class : 'Ten',
//    Object2:{
//     name : 'noman',
//     rollno : 12,
//     class : 'ten'
//    }
// }
// console.log(object);



// 14. Write a JavaScript function to retrieve all the values of an object's properties. 

// let object = {
//     name :'sami',
//     rollno :23,
//     class : 'Ten',
//    Object2:{
//     name : 'noman',
//     rollno : 12,
//     class : 'ten'
//    }
// }
// console.log(Object.values(object.Object2));




// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

// let object = {
//     name :'sami',
//     rollno :23,
//     class : 'Ten',
//    Object2:{
//     name : 'noman',
//     rollno : 12,
//     class : 'ten'
//    }
// }
// console.log(Object.values(object.Object2));
// console.log(Object.keys(object.Object2));
// console.log(Object.entries(object.Object2));


// 8. Write a JavaScript program to create a Clock.   

// Note: The output will come every second.

// Expected Console Output :

// "14:37:42"

// "14:37:43"

// "14:37:44"

// "14:37:45"

// "14:37:46"

// "14:37:47"

//  let day = new Date();

//  console.log(day.getHours()+":" +day.getMinutes()+":"+ day.getSeconds());



// 17. Write a JavaScript function to check whether an object contains given property. 


// let object = {
//     name :'sami',
//     rollno :23,
//     class : 'Ten',
//    Object2:{
//     name : 'noman',
//     rollno : 12,
//     class : 'ten'
//    }
// }
// console.log((`${object.name} `));





// Functions

// 1. Write a js program to find cube of any number using function.

// let cube = Math.cbrt(64);
// console.log(cube);



// 3. Write a js program to find maximum and minimum between two numbers using functions.


// let max = Math.max(64,34 ,56,78,45,67,34,67,87,98,);
// console.log("maximum number is "+max);
// let min= Math.min(64,34 ,56,78,45,67,34,67,87,98,);
// console.log("minimum number is "+min);



// 4. Write a js program to check whether a number is even or odd using functions.

// let num = [12,23, 34,57,78,87,98,57];

// for (let i = 0; i < num.length; i++) {
//     if (num[i]%2==0) {
//        console.log("number is even  : "+ num[i]); 
//     }
//     if (num[i]%2!==0) {
//         console.log("Number is odd  : " +num[i])
//     }
    
// }

// 6. Write a js program to find all prime numbers between given interval using functions.

  let num = [12,23, 34,57,78,87,98,57];

for (let i = 0; i < num.length; i++) {
    if (num[i]%2==1) {
       console.log("number is prime  : "+ num[i]); 
    }
}