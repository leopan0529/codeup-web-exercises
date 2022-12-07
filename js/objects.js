const users = [
    {
        givenName: 'Sam',
age: 21
},
{
    givenName: 'Cathy',
    age: 34
},
{
    givenName: 'Karen',
    age: 43
}
];


//0. Log each given name
// 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
// 2. Change the names of all users to "John Doe"
// 3. Increase the current age of all users by 1




let array = []
for (var i=0;i<users.length;i++){
    array.push(users[i].givenName)

    users[i].givenName = "John Doe"
    users[i].age +=1;
    console.log(users[i])
    allname =array.join(" ")

}
console.log(allname)


let name = ""
    users.forEach(function (user){

        name+= user.givenName+ '';


    })
console.log(name.trim(), "Sam Cathy Karen")



const dog = {
    petname: "leo",
    age:4,
    bark: function (){
        console.log("Woof woof");
    },
    eat: function (food){
        console.log("Dog is eating ....."+ food);
    },

    agePet: function (){
        dog.age+=1
        //return dog.age
    }

}


dog.agePet();
dog.agePet();
dog.agePet();
dog.agePet();
dog.agePet();


console.log(dog,'dog',111111111111)