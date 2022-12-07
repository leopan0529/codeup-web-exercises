"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

let analyzeColor = randomColor;
console.log(analyzeColor)


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// switch (analyzeColor){
//     case "red" :
//         result =;break;
//     case "orange": console.log("orange orange,777"); break;
//     case "yellow" : console.log("yellow,666"); break;
//     case "green": console.log("green,555");break;
//     case "blue" : console.log("blue 111");break;
//     case "indogo": console.log("indigo, 222");break;
//     case "violet": console.log("violet, 333");break;
//     default:console.log("not this time");break;

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// prompt("what color do you want ")
//
// let user_color = prompt("what color do you want ")
//
// switch(analyzeColor){
//     case user_color: console.log("correct");break;
//     default:console.log("try again"); break
// }
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 *
 *
 */
// const total_number = 100
// function calculateTotal(luckynumber,total_number) {
//     if(luckynumber === 5)
//     {
//         return total_number * 0/100;}
//
//     else if(luckynumber === 4)
//     {
//
//         return total_number * 0.5 / 100
//     }
//     else if(luckynumber === 3)
//     {
//         return total_number * 0.35 / 100
//
//     }
//     else if(luckynumber === 2)
//     {
//         return total_number * 0.25 / 100
//     }
//     else if(luckynumber === 1)
//     {
//         return total_number * 0.1 / 100
//     }
//
//
//     else
//     {
//         return total_number * 100 / 100
//     }
//
//
//
//
//
// }


// function calculatetotal(luckyNum, total){
//     let discount,
//         discountprice;
//     switch(luckyNum){
//
//         case 0:
//             discount = 0;
//             break;
//         case 1:
//             discount = 0.1;
//             break ;
//         case 2:
//             discount = 0.25;
//             break;
//         case 3:
//             discount = 0.35;
//             break;
//         case 4:
//             discount = 0.5;
//             break;
//         case 5:
//             discount = 1;
//             break;
//         default:
//             return "incorrect format"
//
//
//
//     }
//
//     if (!isNaN(total)){
//         discountprice = (total*(1-discount));
//     }
//     else {
//         return "wrong"
//     }
//
//
//     return discountprice.toFixed(2)
//
// }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var luckyNumber = Math.floor(Math.random() * 6);
//
// let userNumberPrompt = prompt("what was the total of your bill ?");
//
// let userResult2 = calculatetotal(luckyNumber,userNumberPrompt)
//
// alert(`your lucky number was ${luckyNumber}, the price before the discount was $${userNumberPrompt}, the price after the discount is $${userResult2}`);





/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */









// var i = 0;
//
//  while (i<3) {
//
//
//      var test = confirm ("would you like to enter a number?");
//
//      if (test) {
//          var num = prompt("what number")
//          var next = numn_game(num);
//
//          var test2 = add_num(next);
//
//          pos_neg(test2)
//          break
//
//      } else {
//         alert("try again")
//
//      }
//      i++
//  }
//
//
//
// function numn_game(num){
//     num === Number(num);
//
//     if (num%2=== 0){
//         alert("this is a even number")
//         return num
//     }
//     else {
//         alert('this is an odd number')
//         return  num
//     }
//
// }
//
//
//
// function add_num(num){
//     var rs = 100+Number(num);
//     alert("what the number plus 100 is {}".replace("{}",rs))
//     return num
// }
//
// function pos_neg(num){
//
//
//     if (num >0) {
//         alert("{} is postive".replace("{}",num))
//     }
//     else {
//         alert("{} is negative".replace("{}",num))
//     }
// }


// numn_game(num);






/// extra


// function isOdd(number){
//
//     if (number%2===0){
//         return "this is even"
//     }
//     else {
//         return "this is odd"
//     }
// }
//
// console.log(isOdd(5))


//
// var num_1 = Math.floor((Math.random()*1000+900))
// // var num_2 = Math.floor(Math.random() * 1000);
// console.log(num_1)
// // function getRandomNumber(min, max){
// //
// //
// // }


console.log("bob"[0])


function removeFirstCharacter(input){


    if(typeof input !== "string") return false;
     return (input.length ===0) ? input :input.slice(1);

}




// function  isTrue(input){
//     let output;
//     if (input)
// }

function not(input){
    let output;

    return output
}






// function removeFirstCharacter(input){
//     if (typeof input === "string"){
//         if(input.length===1){
//             return '" "'
//         }
//         else {
//             return input.slice(1)
//         }
//
//
//     }
//     else{
//         return false
//     }
// }



console.log(removeFirstCharacter('bob'), 'ob'); // 'ob'
console.log(removeFirstCharacter('jason'), 'ason'); // 'ason'
console.log(removeFirstCharacter('to'), 'o'); // 'o'
console.log(removeFirstCharacter('1'), ''); // ''
console.log(removeFirstCharacter(), false); // false
console.log(removeFirstCharacter(''), ''); // ''
console.log(removeFirstCharacter('false'), 'alse'); // 'alse'
console.log(removeFirstCharacter(' codeup'), 'codeup'); // 'codeup'
console.log(removeFirstCharacter(' codeup '), 'codeup '); // 'codeup '





