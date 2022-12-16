
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



var longest=0
var longest_name
function findAverageDogAge(input){
    for (var i=0;i<input.length;i++){
        console.log(pets[i].name.length)
        if(input[i].name.length>longest){
            longest = input[i].name.length
            console.log(longest,2222,input[i].name)
            longest_name = input[i].name

        }

    }
 return longest_name
}

console.log(findAverageDogAge(pets),1111)



