/* Classes are a tool to quicly create similar objects. 

Lets say we want to create a class of droids, each droid we make will have a name, a color, and a sound

To create a Class we must name it and create a constructor to make each object */

class Droid {
    constructor(name, color, sound){
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
}

/* Your constructor will take in the parameters provided to it to create each object using the information provided in
the argument when the constructor is called.*/

let C3P0 = new Droid('C3P0', 'gold', 'I beg your pardon.');

console.log(C3P0.sound);

/*Let's sat that we have a special type of droid that we want to create that has all of these same properties as the Droid class.
We can inherit the properties of the parent Droid class in our child class */

class Assassin extends Droid {
    constructor(name, color, sound){
        super(name, color, sound);
        this.selfDestruct = 1 
    }
}

let IG88 = new Assassin ('IG-88', 'silver','I Will Initiate Self-Destruct.')
console.log(IG88.sound);

/* So our new IG-88 Assassin Droid has a special selfDestruct property, but as of right now it doesnt DO anything. 
Methods can be assigned to 

*/


//Manufacturers protocol dictates I cannot be captured. I must be destroyed