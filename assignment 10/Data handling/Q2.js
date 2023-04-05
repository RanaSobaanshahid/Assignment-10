// 2. Write a JavaScript function to get the current date.   



// Note : Pass a separator as an argument.

// Test Data :

// console.log(curday('/'));

// console.log(curday('-'));

// Output :

// "11/13/2014"

// "11-13-2014"

var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };
    console.log(curday('/'));
    console.log(curday('-'));