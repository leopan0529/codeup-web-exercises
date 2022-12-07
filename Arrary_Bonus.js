// 1. Create an array of 10 foods. Write using a for loop,
// write logic that will log only the foods that start with a vowel.
// Write another solution using a forEach loop.


var foodmap = ['apple','taco','noodle','pork bun','sushi','ice cream','pho','ramen','kimchi','steak']

for (let i=0;i<foodmap.length;i++) {

    if (foodmap[i][0].toLowerCase() === "a" || foodmap[i][0].toLowerCase() === 'e' || foodmap[i][0].toLowerCase() === 'i' || foodmap[i][0].toLowerCase() === 'o' || foodmap[i][0].toLowerCase() === 'u') {


        console.log(foodmap[i], `index ${i}`)
    }
    else {
        console.log("they dont have the vowel")
    }
}


console.log('for each>>>>>>>>>>>>>>>>>>>>>>>>>>>')

foodmap.forEach(function (food,index) {
    //)

    if(food.toLowerCase()[0]=== "a"||food.toLowerCase()[0] === "e"|| food.toLowerCase()[0] === "i"||food.toLowerCase()[0]==="o"||food.toLowerCase()[0]==="u") {
        console.log(food,"index",index)
    }

})

console.log("Question No.2>>>>>>>>>>>>>>>>>>>")







//2.. Write a function, addEvenNums, that takes in an array of numbers and adds up
// only the even numbers in the array and returns the sum of the even numbers.
// Assume any array inputs will only contain valid number elements and be non-empty.

var num_array = [1,2,3,4,5,6,7,8];
let s=0

function addEvenNums(num){
    for(var i = 0;i<num.length;i++){
        if (num[i]%2 ===0){
            s=s+num[i]
            console.log(num[i],'even number');
            console.log(s)
        }
       //return s

    }

}


addEvenNums(num_array)




//3. Write a function, checkIfNumInArray, that takes in an array of numbers and a number and returns the string
// ‘input num in input array’ if the second argument is an element in the first argument array
// otherwise, the function should return the string ‘input num NOT in input array’ (


console.log("Question No.3>>>>>>>>>>>>>>>>>>>")



var num_string_array = [1,2,4,5,6,7,8]

console.log(num_string_array,222);

function checkIfNumInArray(array,input){
    for ( let i=0;i<array.length;i++){
        if (input===array[i]){
            console.log(input);
            console.log("input num in input array");

        }

        else {
            console.log("input num NOT in input array")
        }
    }
}

checkIfNumInArray(num_string_array,3)











//var month_array = ["April", 'May', "June"];
//
// month_array.push("July");
// console.log(month_array)
// month_array.unshift("March");
// console.log(month_array)
// month_array.pop("July");
// console.log(month_array)



// const x = [1,2,3];
//
// const y= x;
//
// console.log(x);
//
// console.log(y);
//
//
// x.push(4);
//
//
// console.log(x);
// console.log(y);




// const x = [1,2,3];
// const  y=x.slice();
// x.push("hello");