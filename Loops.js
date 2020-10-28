/* Loops are an important way to repeat a block of code until a specified condition is met. 

A typical loop contains three expressions separated by ; inside the parentheses: 

    an initialization starts the loop and can also be used to declare the iterator variable.
    a stopping condition is the condition that the iterator variable is evaluated against.
    an iteration statement is used to update the iterator variable on each loop.

A for loop will look like this:
*/

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

/* The loop is initalized with the iterator variable called "counter" set to 0. 
   The stopping condition is "< 4". 
   The iterator variable will then increment by 1 (++) each time the block of code is completed. 

   The code inside the curly braces will be run until the stopping condition is met. 

    Note: the iterator variable can be decremented as well by using -- instead of ++.

   Write a loop that will log the numbers 5 - 10:
*/



/* For loops are also useful for iterating over data structures, like arrays. 

   To loop through each element in an array, a for loop should use the array’s .length property in its condition. 
*/

let magicalCreatures = ['Unicorn', 'Manticore', 'Thestral', 'Niffler'];

for (let i = 0; i < magicalCreatures.length; i ++){
    console.log("I would love to pet a " + magicalCreatures[i]);
}

/* Loops can be nested! This can be used in a few ways, but lets use a nested loop to compare the contents of 2 arrays.
*/
let students = ['Harry', 'Hermione', 'Ron', 'Luna', 'Draco'];
let notInTheDa = [ 'Crabbe', 'Draco', 'Goyle', 'Myrtle'];

for (let i = 0; i < students.length; i ++){
    for(let j = 0; j < notInTheDa.length; j ++){
        if (students[i] === notInTheDa[j]){
            console.log(students[i] + " is not in the DA");
        }    
    }
}

/* While loops are useful if we don't know how many times a loop may need to run, but we need to be careful, because a while loop
can become an infinite loop if we don't properly set up our test condition. 
*/

let counter = 0 

while (counter < 100){
    console.log(counter)
    counter += 10
}

/* In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run.
This is where the do...while statement is handy.

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.

The syntax for a do...while statement looks like this:
*/
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded){
    console.log('Needs more sugar.');
};

/* The break statement can be used to end a loop if a specific condition is met.*/

const classesArray = ['Defense Against the Dark Arts', 'Potions', 'Transfiguration', 'Charms'];

// Write you code below
for (let i = 0; i < classesArray.length; i++){
  console.log(classesArray[i]);
  if (classesArray[i] === 'Potions'){
    break;
  }
}

console.log("Turn to page 394...");



/*
PRACTICE!

Write a loop for to produce the same result as this code will.
*/

let favoriteCharacters = ['Doctor Strange', 'Ahsoka Tano', 'Commander Shepard', 'Edna Mode', 'Han Solo'];

console.log(favoriteCharacters[0]);
console.log(favoriteCharacters[1]);
console.log(favoriteCharacters[2]);
console.log(favoriteCharacters[3]);
console.log(favoriteCharacters[4]);

/* Create a variable to contain a list of YOUR favorite characters, making sure that there is at least one in common with the list above.

Make a nested for loop to compare my favorite characters to your favorite characters, and log to the console 
"You both like (character)"
*/

/*
    Create a variable to hold a counter starting at 0.
    Make a while loop that will print out the even numbers from 0 - 10.
*/

