//Generator function
// Generator function that yields numbers from 1 to n
function* numberGenerator(n) {
    let num = 1;
    while (num <= n) {
      // Pause the function and yield the current value of num
      yield num;//It uses the yield keyword to return values one at a time, and you can call it multiple times to get the next value in the sequence.
      num++;
    }
  }
  
  // Using the generator function to get numbers from 1 to 5
  const generator = numberGenerator(5);
  
  // Calling the generator multiple times to get the next value
  console.log(generator.next().value); // Output: 1
  console.log(generator.next().value); // Output: 2
  console.log(generator.next().value); // Output: 3
  console.log(generator.next().value); // Output: 4
  console.log(generator.next().value); // Output: 5
  console.log(generator.next().value); // Output: undefined (since the generator is done)
  //first class function
  //Assigning a function to a variable
const sayHello = function() {
  console.log("Hello, world!");
};

sayHello(); 

//Passing a function as an argument to another function
function executeFunction(func) {
  func();
}

function greeting() {
  console.log("Greetings!");
}

executeFunction(greeting);

//Returning a function from another function
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); 

const triple = createMultiplier(3);
console.log(triple(5)); 
