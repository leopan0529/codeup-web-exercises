
const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

// var new_pet =[]
// var result =0
// for (var i=0;i<pets.length;i++){
//     console.log(pets[i])
//     if(pets[i].type==="fish"){
//         continue
//     }
//     else {
//         new_pet.push(pets[i])
//     }
//
// }
// console.log()



// var longest=0
// var longest_name
// function findAverageDogAge(input){
//     for (var i=0;i<input.length;i++){
//         console.log(pets[i].name.length)
//         if(input[i].name.length>longest){
//             longest = input[i].name.length
//             console.log(longest,2222,input[i].name)
//             longest_name = input[i].name
//
//         }
//
//     }
//  return longest_name
// }
//
// console.log(findAverageDogAge(pets),1111)


// Create a function, filterList, that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// filterList([1,2,‘a’,‘b’]) // returns [1,2]
// filterList([1,‘a’,‘b’,0,15]) // returns [1,0,15]
// filterList([1,2,‘aasf’,‘1’,‘123’,123]) // returns [1,2,123]



// var new_data = []
// function filterList(input){
//     for (var i=0;i<input.length;i++){
//         if (typeof input[i] === "number"){
//             new_data.push(input[i])
//         }
//
//     }
//     return new_data
// }
//
//
// console.log(filterList([1,2,"a","b"]))
// console.log(filterList([1,'a','b',0,15]))
// console.log(filterList([1,2,'aasf','1','123',123]))


function  zipArrays(a,b){
    var data_list =[]
    if(a ===[] || b=== []){
        return []
    }
    else {
        for(var i=0;i<a.length;i++){
            // data_list.push(a[i])
            console.log(a[i],i)
             data_list.push(a[i])

            for(var j=0;j<b.length;j++){
                console.log(b[j],j)
               data_list.push(b[j])
                if (j>i){
                   break
                }
              break
            }
        }
    }
    return data_list
}

// // console.log(zipArrays([1], [2]))
// console.log(zipArrays(['a', 'b'], ['c', 'd']))
// // console.log(zipArrays([1,2,'a','b'], ['bob', null, 'sally', 25]))



// setInterval(function (){
//     console.log("Runs")
// },2000)


// ================================= WARM UP

// Write a function, getUserCredentials, that takes in a list of user objects and returns a list of user objects with only the username and password properties. Assume at least an array of one user object.
//
//
//     const users = [
//     {
//         firstName: 'Justin',
//         lastName: 'Reich',
//         dob: '1923-01-01',
//         username: 'jreich',
//         password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//     },
//     {
//         firstName: 'Sally',
//         lastName: 'Smith',
//         dob: '1935-03-11',
//         username: 'ssmith',
//         password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//     },
//     {
//         firstName: 'Fred',
//         lastName: 'Smith',
//         dob: '1999-01-21',
//         username: 'fsmith',
//         password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//     },
// ]
//
// getUserCredentials(users) // returns...
//
// /*
//
// [
//   {
//     username: 'jreich',
//     password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
//   },
//   {
//     username: 'ssmith',
//     password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
//   },
//   {
//     username: 'fsmith',
//     password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
//   }
// ]
//
// */

//
// function getUserCredentials(users){
//
//     for(var i=0;i<users.length;i++){
//             delete users[i].firstName;
//             delete users[i].dob;
//             delete users[i].lastName
//
//     }
//     return users
//
// }
//
//
// console.log(getUserCredentials(users))


// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
//
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomes ‘$’
//

function encodeStr(input){
    var new_array=[]
    for(let i=0;i<input.length;i++){
        new_array.push(input[i])


    }

    for (var j=0;j<new_array.length;j++){
        // console.log(new_array)
        // console.log(new_array[j],22)
        if (new_array[j].toLowerCase()==="a"){
            new_array[j] = "@"
            var new_new_array =new_array.join("")
            // console.log(new_array,222)
        }
        else if (new_array[j].toLowerCase()==="i"){
            // console.log(new_array[j])
            new_array[j] = "1"
            // console.log('bikasdsad')
            var new_new_array =new_array.join("")
            // console.log(new_array,333)
        }
        else if (new_array[j].toLowerCase()==="s"){
            new_array[j] = "$"
            var new_new_array =new_array.join("")
            // console.log(new_array,555)
        }

        else{
            // console.log("im here")
            // console.log(new_array)
            new_new_array= new_array.join("")
            // return new_new_array
        }


    }

    return new_new_array


}


console.log(encodeStr('apple'),111)
console.log(encodeStr('codeup'),222)
console.log(encodeStr('SASS'),33)
console.log(encodeStr("bike"),454)

//
// var test = "apple"
//
// for(var j=0;j<test.length;j++){
//     console.log(test[j],111)
// }

