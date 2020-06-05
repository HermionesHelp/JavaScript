/* Scope is the idea that some variables are accessible or inaccessible from other parts of the program.

An important part of understanding scope is recognizing blocks of code, and we've seen blocks before in functions and in
if statements. The block of code is the code found inside a set of curly braces. 

Scope is the context in which variables are declared. Variables can exist either inside or outside of 'blocks' of code.

Global Scope variables are declared outside of blocks of code. Because they are not bound to a block they are accessable to any 
code inside the program. */

let name = 'Gandalf';

function whoWasHere(){
    return name + ' came to my party.'
}

console.log(whoWasHere());

/* Because the name variable is declared on a global level it is accessable by the block of code inside the function.

Block Scope is when a variable is defined inside a block of code, it is only accessible by the code inside the curly braces. 

Variables with block scope are called local variables because they're "local" to the block of code. */

function atYourService (){
    let dwarves = ['Dwalin', 'Balin', 'Kili', 'Fili', 'Dori', 'Nori', 'Ori', 'Oin', 'Gloin', 'Bifur', 'Bofur', 'Bombur', 'Thorin'];
    for (let n = 0; n < dwarves.length; n ++){
        console.log (dwarves[n] + ' at your service.');
    }
}
atYourService();

/* Dwarves can only be used inside of the block of code deliniated by the curly braces for the function.

If you try to access that variable outside of the block of code, you'll get an Refrence Error.
*** uncomment the code below to see the error ***/

//console.log(dwarves);

/* It is possible to pollute our scope if we're not careful with our naming.

Our code currently has a global variable called name, but what happens if we use the same variable name inside of a block of code? */

function whichWizard (){
    name = 'Radagast';
    console.log('My name is '+ name);
}

whichWizard();
console.log(name);

/* The important thing to notice there is on line 45. A local variable is created but the let keyword is forgotten.
Name is a global variable so when it's called inside of whichWizard the global variable is changed. 

This is done without any error or notification, so it is possible for this to happen without realizing it's been changed
and the global variable could be used at a later date and could possibly greatly affect your program. */

function grayOrWhite(){
    console.log('I am ' + name + ' the Gray.')
}

grayOrWhite();
