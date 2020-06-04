/* An object is a data structure that can hold many values. Those values are stored as key/value pairs.

An object can hold one or many different key/value pairs depending on the requirements of the developer.

Below is an object literal for a spaceship, it has 3 properties the fuel type, the class, and the color of the ship. These are utilized as the keys to
access the values assigned to them.
 * 'Fuel Type' is in quotation marks because it contains a space. */

let spaceship = {
    'Fuel Type' : 'Dilithium Crystals',
    class : 'Galaxy',
    color : 'silver'
};

/* Now that we have an opject created, we can utilize the values of this ojbect using dot notation */ 

console.log(spaceship.class);
console.log(spaceship["Fuel Type"]);

/*  Objects are mutable so we can change them after they've been created. 

We can add more information to our already existing spaceship object with dot or bracket notation.

*/

spaceship.mission = 'Boldly go where no one has gone before.';
spaceship['Captain Name'] = 'Jean Luc Picard'

console.log(spaceship.mission);
console.log(spaceship['Captain Name']);

/* or change the information stored inside the object */

console.log(spaceship.color);
spaceship.color = 'white'

console.log(spaceship.color);

/* Beacuse they're mutable we can also delete key/value pairs from our object*/

delete spaceship.color
console.log(spaceship.color);

/* When the data stored in an object is a function it's called a method.

When a method is created the name of the method is the key, and the value is the actual funtion itself.

To demonstrate this we'll create a new object alienShip that will have a method called attack.*/

let alienShip = {
    attack : function(){
        console.log('Pew');
    }
};

alienShip.attack();

/* Objects are often nested, an object might have another object as a property. 

Now we're going to create an object called timeMachine which will have a name, a type, and will contain passengers that will be objects that contain a name, and a catchPhrase method.
*/

let timeMachine = {
    name : 'Tardis',
    type : 'Police Box',
    passengers : {
        doctor : {
            name : 'Tenth',
            catchPhrase : function (){
                console.log("Allons-y!");
            }
        },  
        companion : {
            name : 'Donna Noble',
            catchPhrase : function(){
                console.log('Oi, Spaceman!');
            }
        }
    }
}
timeMachine.passengers.doctor.catchPhrase();
timeMachine.passengers.companion.catchPhrase();

// Below are some example objects you can create to further you understanding of objects. 
//  *** All of these steps will create one final object. 

/* Create an object called tvShow that contains a property of 'title' to contain the title of your TV show.
    - create a property of your show that describes the type of show it is, drama, comedy, sci-fi

    Create an object as a property to contain characters in your show. 
        - Each of these characters should have a name and some other property you decide on to define them.
        - Each character should have a method (that is a function remember) that can be called to make your "character" "do" comething

*/



