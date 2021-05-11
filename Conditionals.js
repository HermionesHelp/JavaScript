/* Let jump in with explaining the parts of a conditional to better understand what's going un under the hood. 

We can think of an if condition as an If...then statement. 

If we were to state something in Human then the statement would look a bit like this. 

If the color is blue, then say "I like blue too."

if (condition to be met to enter the code block){
  code that will only execute if the above condition is met; 
} 

So, we can look at this and see the basic outline for an if statement. You first declare that you are going to be using a condition to "direct" your code by typing "if". 

Next by using the (parentheses) you define the condition that IF it evaluates to true will allow the following code block to run. 

Then you surround the code that will ONLY run if your condition is met with {curly braces}. This code block could have one or even hundreds of lines of code. As long as the code is inside those {curly braces} the code is considered the "Then" part of our sentnce. 

Let's convert that above If... then. statement into code. 
*/
// Uncomment this code to run it
// let color = "blue";

// if (color === "blue"){
//   console.log("I like blue too!");
// }

/* So lets give someone an option if they don't choose the color we like. 

To do that we can use an If... else chain we can utilize. 

it's going to be built a lot like that if block we did above. 

if (condition to be met to enter the code block){
  code that will only execute if the above condition is met; 
} else{
  code that will be excuted any time the above condition is false. 
}

So if we were to say this in Human again it would be something like this. 

If the color is blue, then say "I like blue too." If the color is NOT blue, then say "That color is ok too, I guess."

*/

// Uncomment this code to run it
// let color = "green";

// if (color === "blue"){
//   console.log("I like blue too!");
// }else{
//   console.log("That color is ok too, I guess.");
// }

/* Because our if condition (is the color blue) evaluates as false, then our if {code block} gets skipped entirely, and it ONLY runs the code that is inside the else {code block}
 */

/* But what about other colors I like or dislike???

We can use a string of if else blocks to handle these specific colors. 

Let's say that we want to tell people we like blue, but hate pink.

In Human we might say something like this. 

If the color is blue, then say "I like blue too." If the color is pink, then say "Ugh. Definitely not my favorite.", If the color is any color BUT blue or pink, then say "That color is ok too, I guess."

Our code is going to look a bit like this. 

if (condition to be met to enter the code block){
  code that will only execute if the above condition is met; 
} else if (condition to be met to enter this code block) {
   code that will only execute if the above condition is met; 
}else{
  code that will be excuted any time the above conditions are BOTH false. 
}
 */

//Uncomment this code to run it
// let color = "pink";

// if (color === "blue"){
//   console.log("I like blue too!");
// } else if ( color === "pink"){
//   console.log("Ugh. Definitely not my favorite.");
// }else{
//   console.log("That color is ok too, I guess.");
// }

/* The compiler first checks the if (condition). Since our variable is NOT blue, it ignores the {code block} "attached" to that condition.

next it checks the else if (condition), since the vairable IS pink, it enters the {code block} that is "attached" to that condition and executes the code contained within. 

Because our variable meets one of our specific conditions, the else is never evaluated and is skipped.   */