(function() {
    //alert(123)
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person ={
        firstName : "Jiabin",
        lastName : "Pan",

        sayHello: function (){
            return `hello from ${person.firstName} ${person.lastName}`
        }
    }
    //
    // console.log(person.firstName,'first name ');
    // console.log(person.lastName, 'last name')

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //
    // console.log(person.sayHello())







    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    let Cameron = [],
        Ryan = [],
        George = []

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    for(var i = 0; i<shoppers.length;i++){
        console.log(shoppers[i].name)
        if(shoppers[i].amount< 200){
            shoppers[i].discount = 0;
            shoppers[i].afterdiscountprice = shoppers[i].amount
        }
        else {
            shoppers[i].discount = 0.12;
            shoppers[i].afterdiscountprice = shoppers[i].amount *(1-0.12)

        }
        if(shoppers[i].name === "Cameron"){
            Cameron.push(shoppers[i])
        }else if(shoppers[i].name === "Ryan"){
            Ryan.push(shoppers[i])
        }
        else {
            George.push(shoppers[i])
        }

    }

    // console.log(Cameron,11111111111111111);
    // console.log(Ryan,22222222222222222);
    // console.log(George,3333333333333333)



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [ {

       title: "The Salmon of Doubt",
        author :{
           firstName: "Douglas",
            lastName :"Adams"
        }},

        {
            title: "atomic habit",
            author: {
                firstName: "leo",
                lastName: "pan"
            }



},

        {
            title: "biography",
            author: {
                firstName: "Jiabin",
                lastName: "Pan"
            }}
    ]


    console.log(books[0].title,111111111)
    console.log(books[0].author.firstName,111111111)


    for(var i=0;i<books.length;i++){
        books[i].BOOK = `${i+1}`
        console.log(`
        book # ${books[i].BOOK}
        title : ${books[i].title}
        author: ${books[i].author.firstName} ${books[i].author.lastName}`
            )
    }




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
