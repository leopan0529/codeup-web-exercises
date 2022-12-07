
// var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
//
//
// function allIndexesOf(a,b){
//     let fruit_array =[]
//   for( var i =0; i<a.length;i++){
//       if(a[i] === b){
//           //console.log(a[i],i)
//           //console.log(b)
//           fruit_array.push(b)
//           //console.log(fruit_array,'fruit_array')
//       }
//
//
//
//   }
//   return fruit_array
// }


//console.log(fruits.indexOf("banana"))

// console.log(allIndexesOf(fruits, "apple"))
// console.log(allIndexesOf(fruits, "guava"))
// console.log(allIndexesOf(fruits, "pineapple"))



console.log("question number_2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")


var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];


// console.log(bugs.unshift("d"),8888)
// console.log(bugs.shift('d'),999)
// console.log(bugs,777)
// console.log(bugs[-2],'bugs[-1]')
// console.log(bugs.splice(1,1),bugs)
// function removeAll(a,b){
//     let new_array_slice=[];
//     for (var i=0;-i<a.length;i--){
//         console.log(i,a[i])
//         if(a[i] ===b){
//             console.log(a[i],i)
//             delete_bug = bugs.splice(i,1)
//             //console.log(delete_bug,1111)
//             new_array_slice.push( delete_bug)
//             console.log(bugs,22222)
//             console.log(a[i],i)
//             //console.log(new_array_slice)
//         }
//     }
//
// }
//
//
// removeAll(bugs, "ant")
//
// console.log(removeAll(bugs, "ant"),1111)
// console.log(removeAll(bugs, "mosquito"),3333)
// console.log(removeAll(bugs, "roach"),555)

//Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.

//
// function randomIntBetween(min, max){
//
//     if(min<max){
//         var random = Math.floor(Math.random() * (max-min)) + min
//
//         return random
//
//     }
//
// }

//console.log(randomIntBetween(5,100),'min, max')












//Make a function called coinFlip() that returns either 0 or 1, randomly


// function coinFlip(){
//
//     num = Math.round(Math.random() * (1-0)) + 0
//
//     return num
// }
//
//
// console.log(coinFlip())



//Make a function called twoDice() that returns the sum of rolling two six sided dice.



// function twoDice(){
//     var onedice = Math.round(Math.random() * (6)) + 1
//     console.log(onedice,'onedice')
//     var seconddice = Math.round(Math.random() * (6)) + 1
//     console.log(seconddice,'second dice')
//     sum = onedice+seconddice
//     return `sum = ${sum}`
// }
//
//
// console.log(twoDice())



//Make a function called twentySidedDie() that returns a random integer between 1 and 20.


function twentySidedDie(){
     return Math.round(Math.random() * (20)) + 1
}



// console.log(twentySidedDie())






//Make a function called twelveSidedDie() that returns a random integer between 1 and 12.


function twelveSidedDie(){
    return Math.round(Math.random() * (11)) + 1
}


// console.log(twelveSidedDie())




function tetrahedron(){
    return Math.round(Math.random() * (3)) + 1

}

// console.log(tetrahedron())



//Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make.
// The listOfRolls function should return an array of that length,
// where each element of the array is the result of the rollDie function.

var array_test = ["1","2","3",'leo','bread','chinese food', 'sushi','taco']

// Exercise 0. Write a function named first() that returns only the first element of an array

function first(){
    return array_test[0]
}

// Exercise 1. Write a function named secondToLast() that returns the second to last element

function secondToLast(){
    return array_test[array_test.length-2]
}

console.log(secondToLast())

// Exercise 2. Write a function named rest() that takes an array and returns an array containing everything except the first element.

function rest(){
    return array_test.slice(1)
}

console.log(rest())

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array

function getLongestString(){
    for (var i =0;i<array_test.length;i++){
        console.log(array_test[i].length)
    }

}

console.log(getLongestString())

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.

// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers

// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]


// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]



















//
//
// console.log(x); //[1, 2, 3, 'hello']
// console.log(y); //[1, 2, 3]





// const numbers = [11,1,2,5];
//
// // numbers.sort();
// // console.log(numbers)
//
//
// function compareNumbers(a,b){
//
//     return a-b
// }
//
// numbers.sort(compareNumbers);
//
// console.log(numbers);



// const pies = [
//
//     "apple",
//     "huckleberry",
//     "cherry",
//     "rhuabarb",
//     "key lime"
// ]
//
//
//
// const reversedPies = pies.slice().reverse()
// const reverseunslicepies = pies.reverse()
// pies.reverse();
// console.log(pies);
// console.log()
// console.log(reversedPies,111)



const name = "Bob,Sally,Mary";
// const namesArr = name.split("");
// console.log(namesArr);

//
//
// const pi =3.14;
//
// ['3', '14'];
//
//
// function returnDecimal(num){
//
//     return Number("."+String(num).split(".")[1])
// }
//
//
// console.log(returnDecimal(pi))

//
// const namesArr=  name.split(",");
// //
// // console.log(namesArr);
// //
// // namesArr.join("");
// //
// // console.log(namesArr,'join or not')
// //
// // const namesString = namesArr.join("_______________");
// console.log(namesString)



//console.log(" ============================= !! MINI-EXERCISE 2 !!")



/*
    1. Put the first names of everyone in your row in the order they are sitting (just your half of the classroom)
    2. Log the alphabetical order of everyone in your row
    3. Log the reverse alphabetical order of everyone in your row
    4. Log everyone in the row in reverse order
    5. Log an array of just the first two students in the row (left to right)
    6. Log everyone in the row in a single string separated by spaces
    7. Log everyone in the row in a single string separated by underscores
 */



// const first_name_row = ["Hung","Jason","Alexia",'jiabin'];
// const first_name = "Hung,Jason,Alexia,jiabin"
// var first_two = first_name_row.slice()
// console.log(first_name_row.sort(),'alphabetical order');
// console.log(first_name_row.sort().reverse(),'reverse alphabetical order');
// console.log(first_name_row.reverse(),'reverse order');
//
// console.log(first_two.slice(0,2),'first two')
//
//
// console.log(first_name.split(",").join(" "));
// console.log(first_name.split(",").join("_"));
//
