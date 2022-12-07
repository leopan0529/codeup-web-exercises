
//
// function showMultiplicationTable(num) {
//
//     for (var i = 1; i < 11; i++) {
//         s = num * i
//         console.log(`${num} x ${i}=${s}`)
//     }
//
// }
//
//
//  showMultiplicationTable(7)
//
//
// function randomnumbercheck(){
//
//     for(var i=0;i<10;i++){
//         num =Math.floor((Math.random()*200+20));
//         if(num%2===0){
//             console.log(`${num} is even`)
//         }
//         else {
//             console.log(`${num} is odd`)
//         }
//     }
// }
//
//
// randomnumbercheck()



// var s = 0;
// function question3(){
//     var array = []
//     for(var i=1;i<10;i++){
//
//             array.push(i);
//             //console.log(i,'i')
//             //console.log(array,1111);
//             new_one = array.join("");
//             console.log(new_one)
//             //console.log(array[i],"array[i]")
//             for(var j = 0;j<array.length;j++){
//                 array[j]= array[j]+1
//
//             }
//
//         }
//
//
// }
//
//
// question3()


// function question_repear(){
//     for (let i =0; i<9;i++){
//         let num =i+1;
//         let result =num.toString()
//         console.log(result,'i')
//         for(let j =1; j<=i;j++){
//             console.log(result,'j')
//             result = result+num
//         }
//         console.log(result,'final')
//     }
// }
//
// question_repear()

// function questions5(){
//         var s =100
//     for(var i=1;i<20;i++){
//         s=s-5
//         console.log(s)
//     }
// }
//
// questions5()



// function question6(){
//
//     for(var i=0;i<50;i++){
//         if(!i%2===0){
//             if(i===27){
//                 console.log(`Yikes! Skipping number: ${i}`)
//                 continue
//             }
//             console.log(`here is an odd number:${i}`)
//         }
//     }
// }
//
// question6()


// while(true){
//     let userNum = prompt("enter an odd number between 1 an 50");
//     userNum = parseFloat(userNum);
//     if(userNum % 2 === 1 && userNum <= 50 && userNum>=1){
//         for (let i =1; i<50; i++){
//             if (i === userNum){
//                 console.log(`Yikes, Skipping ${i}`);
//                 continue
//             }
//             console.log(`odd number: ${userNum}`)
//         }
//         break
//     }
//
//
// }






// let conesToSell = Math.floor(Math.random() * 50) + 50;
//
// do {
//     let conestoBuy =  cone_sale = Math.floor(Math.random() * 5) + 1;
//     if (conestoBuy <= conesToSell){
//         console.log(`${conestoBuy} cones sold`);
//         conesToSell -= conestoBuy;
//     }
//     else {
//         console.log(`Cannot sell you ${conestoBuy} cones, I have only ${conesToSell}`)
//         console.log(`${conesToSell} cones sold`);
//         conesToSell -= conestoBuy;
//         console.log(`yay! I have sold them all`);
//         break
//
//     }
//
// }
// while (conesToSell >0)
//


