(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("Sun")
    console.log(planets,'added Sun');

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto")
    console.log(planets,'added Pluto');

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift("Sun")
    console.log(planets,"Sun removed");

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop("Pluto")
    console.log(planets,'Pluto Removed');

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"), "Earth's index")
    console.log("Reversing the order of the planets array.");
    console.log(planets.reverse(),'reverse');

    console.log("Sorting the planets array.");

    console.log(planets.sort());
})();
