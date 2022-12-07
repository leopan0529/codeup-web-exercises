

var result = 1;



var i =2;

function while_js(){

    while (result<65536){

        result=i*result
        console.log(i,'i')
        console.log(result)
    }

}

while_js()



iteration = 0;
do {
    console.log(`while loop #${iteration+1}`);
    iteration++
} while (iteration<11)



//1. walk to the kitchen
//2. open the fridge
//3. take out the jelly
//4. put jelly on the table
//5. close the fridge
//6. go to the pantry
//7. open the pantry
//8. grab bread
//9. walk to the table
//10. sat down the bread at the same table
//11. go back to the pantry
//12. grab the peanut butter
//13. walk back to the table
// 14. sat down the peanut butter
//15. walk to the knife drawer
//16. open the drawer
//17. grab the knife
//18. close the drawer
//19. wall to the same table
//20. Sat down the knife
//21. walk to the cabinet
//22. open the  cabinet
//23. grab a plate
//24. close the cabinet
//25. walk back to table
//26. sat down the plate;
//27. open the bread;
//28. take two slices of the bread
//29. sat down the bread on the plate;
//30. close the bread bag
//31.open up the peanut butter
//32. put down the lid of the peanut butter on the table
//33. grab peanut butter
//34 grab knife
//35 scoop peanut butter
//36. grab the bread
//37 spread the peanutbutter on the bread
//38 sat down the knife
//39 grab the jelly
//40. open up the jelly
//41 put down the lid of the jellyon the table
//42 grab knife
//43 grab napkin on the table
//44 clean the knife
//45 sat the k


var allCones = Math.floor(Math.random() * 50) + 50;

console.log(allCones,'all cone')

var total_consale=0

//var cone_sale = Math.floor(Math.random() * 5) + 1
//var remaining_cone = allCones- total_consale

do {
    var cone_sale = Math.floor(Math.random() * 5) + 1
    total_consale = cone_sale + total_consale;
    remaining_cone = allCones - total_consale
    //console.log(cone_sale, 'cone_sale')
    //console.log(remaining_cone,'remaining_cone')
    //console.log(remaining_cone,'remaining')
    if (remaining_cone === 0 || total_consale === allCones) {
        console.log(`${cone_sale} is sold, total_consale so far is ${total_consale}`)
        console.log(`I have remaining of ${remaining_cone} cone left`)
        console.log('Yay! I sold them all!')
        break
    } else if (cone_sale <= remaining_cone && remaining_cone >= 0) {

        console.log(`${cone_sale} is sold,total_consale is ${total_consale}`);
        remaining_cone = allCones - total_consale
        console.log(`${remaining_cone} remaining cone amount`)
        //console.log(`${remaining_cone}`, 'remaining')
        //console.log(`${remaining_cone} is sold`,222);
        //final_remaining_cone = allCones - total_consale
        //console.log(`${final_remaining_cone} `, 'remaining',555);

    } else if (cone_sale > remaining_cone && cone_sale <total_consale && remaining_cone>0) {
        //console.log(cone_sale,'cone_sale',111)
        console.log(`cannot sell you ${cone_sale},I only have ${remaining_cone}`)
        total_consale = remaining_cone + total_consale
        //console.log(total_consale,'total cone_sale')
        console.log(`${remaining_cone} is sold,`)
        remaining_cone = allCones - total_consale
        console.log(`remaining_cone_quantity has ${remaining_cone} left`)
        console.log(`${cone_sale} is sold, total_consale so far is ${total_consale}, I have remaining of ${remaining_cone} cone left`)
        console.log('Yay! I sold them all!')
        break
    } else if (cone_sale > remaining_cone && cone_sale < total_consale && remaining_cone <=0) {
        if( remaining_cone<0) {
            console.log(`cannot sell you ${cone_sale},I only have 0 cone`)
            console.log(total_consale,'total conesale')
            break
        }
        //console.log('Yay! I sold them all!')
        else if(total_consale === allCones) {
            console.log(`total_consale is ${total_consale} `)
            console.log('Yay! I sold them all!')
            break
        }

    }


} while (remaining_cone > 0)




