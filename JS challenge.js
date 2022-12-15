
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
        name: 'Pickles',
        type: 'Dog',
        age: 10
    }

];

var new_pet =[]
var result =0
for (var i=0;i<pets.length;i++){
    console.log(pets[i])
    if(pets[i].type==="fish"){
        continue
    }
    else {
        new_pet.push(pets[i])
    }

}
console.log()




function findAverageDogAge(input){
    var new_pet =[]
    for (var i=0;i<input.length;i++){
        console.log(pets[i])
        if(input[i].type==="Dog" || input[i].type==="Cat"){
            new_pet.push(input[i])
        }

    }
return new_pet
}

console.log(findAverageDogAge(pets),1111)
