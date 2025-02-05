// var cookieIngredients = ["flour", "salt", "butter", "egg", "vanilla"]; // This is an array

// cookieIngredients.push("baking soda", "sugar", "chocolate chips");// This will add items to the array.
// cookieIngredients[0] = "pepper"; This selects a specific item in the array.
//cookieIngredients.pop(); // This removes the last item in the array.
// cookieIngredients.shift(); This drops the first item off the array list.
// cookieIngredients.splice(1, 1, "pepper"); remove an item spaces from the left and number of items.
// console.log(cookieIngredients);

// function addItem() {
// var cookieIngredients = ["flour", "salt", "butter", "egg", "vanilla"];
// cookieIngredients.push("Milk");
// return cookieIngredients;
// };
// var cookies = addItem();
// console.log(cookies);

//Nested arrays.


//var neighbors = [
//    ['cocolate cookie 1', 'cocolate cookie 2', 'cocolate cookie 3', 'cocolate cookie 4', 'cocolate cookie 5'],
//    ['vanilla cookie 1', 'vanilla cookie 2', 'vanilla cookie 3', 'vanilla cookie 4', 'vanilla cookie 5'],
//    ['oreo cookie 1', 'oreo cookie 2', 'oreo cookie 3', 'oreo cookie 4', 'oreo cookie 5']
//];
//
//console.log(neighbors[2][4]);//[list], [item in list]

// let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// secretMessage.pop();
// secretMessage.push("to", "program");
// secretMessage.splice(7, 1, "right");
// secretMessage.shift();
// secretMessage.unshift("Programming");
// secretMessage.splice(6, 5, "know")
// console.log(secretMessage.join(' '));

// Loops.

var menu = ["Cheeseburger", "Fries", "Salad", "Steak", "Sushi", "Italian sausage", "Orzo", "Lemon"];

for (let count = 0; count < menu.length; count += 1) {

    console.log(menu[count]);
}
// Nested for loops
// var soccerTeam = ["Alice", "Jose", "Jacob", "Kathy", "Fred", "Justin"];
// var baseballTeam = ["Ted", "Sue", "Alice", "Randy", "Kathy", "Edgar"];
// var onBothTeams = [];
//
// for (let i = 0; i < soccerTeam.length; i++) {
// const soccerPlayer = soccerTeam[i];
//
// for (let j = 0; j < baseballTeam.length; j++) {
// const baseballPlayer = baseballTeam[j];
//
// if (soccerPlayer === baseballPlayer) {
// onBothTeams.push(soccerPlayer);
// }
// }
// }

// console.log(onBothTeams);

// Array helper methods. forEach.

// var numbers = [1, 2, 3, 4, 5];
// 
// Array.prototype.myForEach = function (callback) {
// for (let i = 0; i < this.length; i++) {
// let element = this[i];
// 
// callback(element);
// }
// };
// 
// numbers.myForEach(function (number) {
// console.log(number);
// });
// map Example.
var numbers = [2, 4, 6, 10];

Array.prototype.myMap = function (callback) {
    var returnArray = [];
    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        returnArray.push(callback(element));
    }

    return returnArray;
};

var timesTwo = numbers.myMap(function (num) {
    return num * 2;
});
console.log(timesTwo);

var budgets = [
    { title: "Rent", amount: 1200 },
    { title: "Groceries", amount: 300 },
    { title: "Phone", amount: 50 },
    { title: "Gas", amount: 200 },
    { title: "Internet", amount: 45 },
    { title: "Bourban", amount: 1000000 }
];
Array.prototype.myMap = function (callback) {
    var budgetInfo = [];
    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        budgetInfo.push(callback(element));
    }

    return budgetInfo;
};

var budgetStrings = budgets.myMap(function (budget) {
    return budget.title + " (" + budget.amount + ")";
});

console.log(budgetStrings.map(item => `"${item}"`).join(", "));







