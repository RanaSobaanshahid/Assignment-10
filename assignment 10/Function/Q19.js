//7. Write a js program to print all strong numbers between given interval using functions.

// function strong() {
//     let str_number = prompt("enter a strong number");
//     let str_number_i = 1;
//     let str_number_n = 1;
//     let str_number_d = 1;
//     let sum = 0;
//     for (let i = str_number[0]; i >= 1; i--) {
//         str_number_i = str_number_i * i;
//         // console.log(str_number_i);
//         for (let n = str_number[1]; n >= 1; n--) {
//             str_number_n = str_number_n * n;
//             //  console.log(str_number_n);
//         }
//         for (let d = str_number[2]; d >= 1; d--) {
//             str_number_d = str_number_d * d;
//         }
//         // console.log(str_number_d);
//     }
//     sum = str_number_i + str_number_n + str_number_d;
//     if (str_number == sum) {
//         console.log(str_number + ": is a strong numbers");
//     } else {
//         console.log(str_number + ": is not  a strong numbers");
//     }
// }
// console.log(strong());