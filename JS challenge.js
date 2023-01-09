
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

