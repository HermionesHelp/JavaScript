/* An object is a data structure that can hold many values. Those values are stored as key/value pairs.

An object can hold one or many different key/value pairs depending on the requirements of the developer.

Below is an object literal for a spaceship, it has 3 properties the fuel type, the class, and the color of the ship. These are utilized as the keys to
access the values assigned to them.
 * 'Fuel Type' is in quotation marks because it contains a space. */

let spaceship = {
    'Fuel Type' : 'Dilithium Crystals',
    class : 'Galaxy',
    color : 'white'
};

/* Now that we have an opject created, we can utilize the values of this ojbect using dot notation */ 

console.log(spaceship.class);
console.log(spaceship["Fuel Type"]);

