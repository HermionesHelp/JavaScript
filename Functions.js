/* Functions are resuable blocks of code that preform a specific task on some data

a function declaration contains consistent parts. 

|Function|                 
|keyword|   |identifier|   |arguments| <- (this may be blank depending on the function)
function     greetWorld    (name){
    console.log('Hello, World!');      <<< Function body
}

Parameters can be provided to the functions to be used inside the functions. These parameters will be assinged the 
value of the argument that is passed when the function is invoked 

** invoking a function **

greetWorld();

if the function requires parameters to be utilized, those arguments are provided inside the parentheses when the function is invoked */


/* The below function is a fairly simple one. 
  - The function requires a parameter that is a string referred to as 'name'.
  - That 'name' parameter is provided as an argument when the function is called 
  - Which is then returned with 'boo' concatonated to the end. 

When the function is invoked, the argument of 'Chicken' is provided to the function and the function then returns
'Chickenboo' to the console.*/ 

function sayMyName (name) {
    return name + 'boo';
  }

console.log(sayMyName('Chicken'));
 

/* It is possible to utilize functions inside of functions, and this might be something that you do frequently to produce a desired end result. 

When creating a function that calls another function it is important to provide the parameters necessary for BOTH funtions.

The function below takes our previously created sayMyName function and then adds a greeting to it, and allows the user to define a number of times to repeat that greeting. 

The sayHello function only needs the number of times to repeat the greeting to complete its task, BUT it utilizes sayMyName to receive the 'newname' that it will be using so
that parameters must also inclucde the parameter that the sayHello function requires. 

Inside the sayHello function the sayMyName function is called and assigned to a local variable to be utilized inside the for loop.
The for loop then increments from 0 to the number of times that is provided as an argument when sayHello is invoked (3) and logs it's message to the console.
*/

function sayHello (name, times){
  let newname = sayMyName(name);
    for (let i = 0; i < times; i ++){
      console.log(`Hello, ${newname}`);
    }
}
  
sayHello('Chicken', 3);

/*  Functions can be provided with default parameters, which allows a parameter to have a default value in case there is no argument passed to the function.

This might be used in the case when a standard value is most frequently used to complete an action but that value might occasionally change.
  i.e. taking attendance. The most frequently used value might be "Present", but you would like to be able to leave the ability to add "Tardy". 
      when calling the function for each student you could leave the arguments empty if the student is Present and on time, and only pass
      in arguments if there is any other state of attendance. 

Here is a new function, newGreeting, that takes in the same arguments and produces the same output of sayHello if provided with the same arguments as sayHello.
However, newGreeting has default values assigned to its parameters, so that even when newGreeting is invoked without any arguments it will produce a default output.
*/

function newGreeting (name = 'Honey', times = 1){
    let newname = sayMyName(name);
    for (let i = 0; i < times; i ++){
      console.log(`Hello, ${newname}`);
    }
} 
newGreeting();

// Below are some example functions you can create to further you understanding of functions. 

/* Write a function squareArea (length) which returns the area of a square with a length of the passed as the argument to the function

Reminder: the area of any square is equal to the length of a side squared */




/* Write a function that increases the size of a square by 2 units and returns the area of this new square

Reminder: you've already written a function to calculate the area of a square, you should call that function. */


 