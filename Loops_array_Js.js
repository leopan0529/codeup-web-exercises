// ================================= LOOPS AND ARRAY BONUSES
//
// 1. Create a function that returns a random day of the week
      var weekday = ["Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday","Sunday"];

      // function  randomweekday(input){
      //     var randomI = Math.round(Math.random()*6)
      //
      //     return weekday[randomI]}
      //     // console.log(randomI)}
      //     // for (var i=0;i<input.length;i++){
      //     //
      //     // }
      //
      // console.log(randomweekday())

// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
//


let alphabet = 'abcdefghijklmnopqrstuvwxyz';



      function someFunction(input){xSS
          let alphabet = 'abcdefghijklmnopqrstuvwxyz';
          alphabet_array = alphabet.split("")
               return alphabet_array.indexOf(input)+1
      }

// console.log(someFunction("a")) // returns 1
// console.log(someFunction("z")) // returns 26

      //console.log(alphabet_array)

//3. Create a function that returns the longest string in a given array of string elements.



var longstring = ['aaaaaaaaa', 'bbbbbbb','cccccccc','dddd','eeeeee']



// console.log(Math.max(longstring))
// console.log(Math.max())
// function returnlongstring(input){
//           let length_array = []
//           for (var i=0; i<input.length-1;i++){
//               if(input[i].length-input[i+1].length>0){
//                   console.log(input[i])
//                   console.log(input[i+1])
//               }
//
//           }
//       }
//
// returnlongstring(longstring)

// 4. Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array are equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
//
    var arr1 = ['bob', 1, true, 1, 2];
      var arr2 = [2, null, undefined, 0, 2, "apple"]
// exampleFunction(arr1, arr2) // returns true
//
// function addtogether(arr1,arr2){
//           let num_arr1=[],
//               num_arr2=[],
//               restul1=0,
//               result2=0;
//           for(var i=0;i<arr1.length;i++){
//               if (typeof arr1[i]==="number"){
//                   num_arr1.push(arr1[i])
//
//               }
//           };
//           for (var j=0;j<arr2.length;j++ ){
//               if (typeof arr2[j]==="number"){
//                   num_arr2.push(arr2[j])
//
//               }
//           }
//             console.log(num_arr1,111)
//     console.log(num_arr2,222)
//           for (var z =0;z<num_arr1.length;z++){
//               restul1 +=num_arr1[z]
//
//
//           }
//             console.log(restul1)
//           for (var c =0;c<num_arr2.length;c++){
//               result2+= num_arr2[c]
//           }
//
//           console.log(result2)
//
//           if(result2=== restul1){
//               return true
//           }
//           else {
//               return false
//           }
//
// }
//
// console.log(addtogether(arr1,arr2))



// 5. Write a program to toggle the case for all characters in a string. Special characters will not change.
//     Example input: "aBc12#"
// Example output: "AbC12#"
//

// test_array = "aBc12#";
//       //console.log(test_array.split(""))
// console.log(test_array.split("").length)
//
//
//
// function togglestring(input){
//           let result_array =[]
//           input_split= input.split("")
//     //onsole.log(input_split,111)
//     for (var i=0;i<input_split.length;i++){
//         if(typeof input_split[i]=== "string"){
//             if(input_split[i]=== input_split[i].toLowerCase()){
//                 input_split[i]= input_split[i].toUpperCase()
//
//             } else if(input_split[i]=== input_split[i].toUpperCase()){
//                 input_split[i]= input_split[i].toLowerCase()
//             }
//
//         }
//
//     }
//
//     console.log(input_split)
//     input_final = input_split.join("")
//     return input_final
// }
//
// console.log(togglestring("aBc12#"))

// 6. Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//
//     Example Input: "geek5"
// Example Output: "Yes"
//
// Example Input: "codingchallenge25"
// Example Output: "No"

// function stringnumberappend(input){
//     input_split= input.split("");
//     //console.log(input_split)
//     input_split_length = input_split.length;
//     //console.log(input_split_length)
//     if(Number(input_split[input_split_length-1]) === input_split_length){
//         return true
//     }
//     else {
//         return false
//     }
// }

//
// console.log(stringnumberappend("aaaaaaaa9"))
//
// console.log(stringnumberappend("codingchallenge25"))

//
// 7. Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt),
// create an application that will prompt the user to choose from a menu with the following actions:
//     1) add a student
// 2) delete a student
// 3) view all students in alphabetical order
// 4) view all students in reverse alphabetical

alert("welcome to the student roster management system");
      let studnet_order = []


        let result =7,
            z = 0
        while (z<result) {
            var selection = prompt("What would you like to do: Please choose the following selections:\n" +
                "1: add a student\n" +
                "2: delete a student\n"+
                "3: view all students in alphabetical order\n"+
                "4: view all students in reverse alphabetical\n"




            )
            if(selection === null){
                break
            }
            if (Number(selection) === 1) {
                alert("add a student");
                var student_name = prompt("please enter student's name ");
                confirm(`${student_name} has been added from the roster`);
                studnet_order.push(student_name)
                z++
            } else if (Number(selection) === 2) {
                alert("delete a student");
                var del_student_name = prompt("please enter student's name ");

                for (var j=0;j<studnet_order.length;j++){
                    if (del_student_name === studnet_order[j]){
                        console.log(studnet_order)
                        studnet_order.splice(j,1)

                    }




           }
          }



            else if (Number(selection) === 3) {
                alert("view all students in alphabetical order");
                if (studnet_order.length === 0) {
                    alert("no student has been added in the roster yet")
                } else if (studnet_order.length > 0) {
                    alert(studnet_order.sort());
                }


            } else if (Number(selection) === 4) {
                alert("view all students in reverse alphabetical");
                if (studnet_order.length === 0) {
                    alert("no student has been added in the roster yet")
                } else if (studnet_order.length > 0) {
                    alert(studnet_order.reverse());
                }
            } else {
                alert("the format is wrong, try again")
                z++
            }
        }




