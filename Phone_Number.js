// ** Create a function that will take in a formatted string of numbers and return an array of phone numbers without any symbols. Console.log the output of the returned array.

/* EXAMPLE...

    const phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';

    cleanPhoneNumbers(phoneNumbers);

    the above code should output the following...

       2105552020
       2305552020
       5125553030

*/

// const phoneNumbers = '210-555-2020\n230-555-2020\n512-555-3030';


function  cleanPhoneNumbers(phoneNumbers){
    var afterN = phoneNumbers.split("\n");
   // console.log(afterN,11111111);
    for(var i = 0; i<afterN.length;i++){
        var splitN = afterN[i].split("-");
        var joinN = splitN.join("")
        console.log(joinN)
    }

}


cleanPhoneNumbers('210-555-2020\n230-555-2020\n512-555-3030')

