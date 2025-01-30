// function expression
var greet = function (guestsName, hostName) {
    console.log(`Hello ${guestsName}, welcome to ${hostName}'s party!`);
};

greet("Mindy", "Jeffrey");

// function decleration can be hoisted(raised to the top)
function hello (guestsName, hostName) {
    console.log(`Hello ${guestsName}, welcome to ${hostName}'s party!`);
};

hello("Mindy", "Jeffrey");

// Arrow functions
var greet = () => {
    console.log("Hello world!");
}

greet();

function add (num1, num2) {
    return num1 + num2;
}

console.log(add(5, 2));

function welcome() {
  return "Hello World.";
};

console.log(welcome());



