(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var name = ['leo','shah','oh','alexia'];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    //
    console.log(name.length,'number of elements')

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(name[0]);
    console.log(name[1]);
    console.log(name[2]);
    console.log(name[3]);



    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(var i=0;i<name.length;i++){
        console.log(name[i])
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

     name.forEach(function (classmate){
         console.log(classmate)
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

})();

var number = [1,2,3,4,5];


function first(number){
    console.log(number[0])
}

function second(number){
    console.log(number[1])
}

function last(number){
    console.log(number[number.length-1])
}



first([1, 2, 3, 4, 5])

second([1, 2, 3, 4, 5])

last([1, 2, 3, 4, 5])

// var array = ['leo','shah','oh','alexia'];
//
// for(var i = 0;i<array.length;i++){
//     console.log(array,'for loop')
// }
//
//
// function name(element,index,array){
//     console.log(element,'element',111);
//     console.log(index,'index',222);
//     console.log(array,'array',333)
// }
//
//
//
//
// array.forEach(function (element,index,array){
//     console.log(element,'element');
//     console.log(index,'index');
//     console.log(array,'array')
// });


//
// array.forEach(name)




