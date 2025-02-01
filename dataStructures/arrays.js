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

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push("to", "program");
secretMessage.splice(7, 1, "right");
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage.splice(6, 5, "know")
console.log(secretMessage.join());





