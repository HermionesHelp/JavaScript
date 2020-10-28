/* Classes are a tool to quickly create similar objects. 

Lets say we want to create a class of Droids, each droid we make will have a name, a color, and a sound.

To create a Class we must name it and create a constructor to make each object */

class Droid {
    constructor(name, color, sound){
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
}

/* Your constructor will take in the parameters provided to it to create each new object using the information provided in
the argument when the constructor is called.*/

let C3P0 = new Droid('C3P0', 'gold', 'I beg your pardon.');

console.log(C3P0.sound);

/*Let's say that we have a special type of droid that we want to create that has all of these same properties as the Droid class.

We could create a new class containing all the same properties, but we already have a basic Droid class.

We can inherit the properties of the parent Droid class in our child class */

// class Assassin extends Droid {
//     constructor(name, color, sound){
//         super(name, color, sound);
//         this.selfDestruct = 1 
//     }
// }

// let IG88 = new Assassin ('IG-88', 'silver','I Will Initiate Self-Destruct.')
// console.log(IG88.sound);

/* So our new IG-88 Assassin Droid has a special selfDestruct property, but as of right now it doesnt DO anything, 
it's just a piece of information. 

Doesn't sound like much of a Self Destruct mode.

Methods can be assigned to classes so that each of the objects created with these will have these methods assigned to them.

***** You will need to comment out the above Assassin class before running this next section of code*****/

class Assassin extends Droid {
    constructor(name, color, sound){
        super(name, color, sound);
        this.selfDestruct = 1 
    }
    initiateSelfDestruct(){
        if (this.selfDestruct === 1){
            console.log('Manufacturers protocol dictates I cannot be captured. I must be destroyed....*BOOM*')
            this.selfDestruct -= 1;
        }
    }
} 

let IG88 = new Assassin ('IG-88', 'silver','I Will Initiate Self-Destruct.')
console.log(IG88.sound);
IG88.initiateSelfDestruct();
IG88.initiateSelfDestruct();


/*Now to create some classes of your own to practice.

Create a parent class called Weather, it will have properties of a dayOfTheWeek, a highTemp, and a lowTemp
*/




/*Obviously we might want to know more about the weather than that so let's make some child classes

Create a child class that inherits from Weather and has some special properties that Weather doesn't have.
A Rainy class with properties of a skyColor, and a rainfallAmount that we will apply a method to next.
*/

/*Now create an hoursOfRain method inside your Rainy class that increments the rainfallAmount property based on 
a number of hours that it is going to rain. (assume that the rain is steady enough to produce 1 inch of rain 
for 1 hour of raining) */
