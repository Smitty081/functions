// var number = [20, 40, 60, 80, 100];
// var sum = 0;
// 
// for (var i = 0; i < number.length; i++) {
// sum += number[i];
// }
// 
// console.log(sum);

// reduced way
var numbers = [20, 40, 60, 80, 100];

var sum = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

Array.prototype.myReduce = function (callback, accumulator) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        accumulator = callback(accumulator, element);
    }
    return accumulator;
};

console.log(sum);

var shoes = [
    { name: "Nike", price: 200 },
    { name: "Red Wings", price: 250 },
    { name: "Vans", price: 50 },
    { name: "Converse", price: 60 },
    { name: "Reebok", price: 130 },
    { name: "New Balance", price: 75 },
    { name: "Adidas", price: 95 },
    { name: "Keds", price: 40 },
    { name: "Crocs", price: 35 },
];

// Look at each shoe and determine what vowels it has in its name.  The function parameter to reduce takes in the current value of the reduction and the next value in the array and returns the new value of the reduction.
var shoeNameDistribution = shoes.reduce(
    function (previousValue, shoe) {
        // Loop through each vowel
        ["a", "e", "i", "o", "u"].forEach(function (vowel) {
            // If the shoe name has the vowel, add its price to the proper array
            if (shoe.name.includes(vowel)) {
                previousValue[vowel].push(shoe.price);
            }
        });
        return previousValue;
    },
    // Start the reduction with an object containing an array for each vowel
    {
        a: [],
        e: [],
        i: [],
        o: [],
        u: [],
    }
);

console.log(shoeNameDistribution);

var shoes = [
    { name: "Nike", price: 200 },
    { name: "Red Wings", price: 250 },
    { name: "Vans", price: 50 },
    { name: "Converse", price: 60 },
    { name: "Reebok", price: 130 },
    { name: "New Balance", price: 75 },
    { name: "Adidas", price: 95 },
    { name: "Keds", price: 40 },
    { name: "Crocs", price: 35 },
];

var totalCost = shoes.reduce(function (total, shoe) {
    return shoe.price + total;
}, 0);

Array.prototype.myReduce = function (callback, accumulator) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        accumulator = callback(accumulator, element);
    }
    return accumulator;
};

console.log(totalCost);

var beers = [
    { name: '512 IPA', type: 'IPA' },
    { name: 'Breakfast Stout', type: 'Stout' },
    { name: 'Pernicious IPA', type: 'IPA' },
    { name: '90 Minute IPA', type: 'IPA' },
    { name: 'Obsidian Stout ', type: 'Stout' }
]

var beerStyles = beers.reduce(function (acc, beer) {
    if (acc.hasOwnProperty(beer.type)) {
        acc[beer.type] += 1
    } else {
        acc[beer.type] = 1;
    }
    return acc
}, {});

console.log(beerStyles);

var numbers = [1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5];

var unique = function (array) {
    return array.reduce(function (accumulator, num) {
        var exists = accumulator.find(function (item) {
            return num === item;
        });
        if (!exists) {
            accumulator.push(num);
        };
        return accumulator;
    }, []);
};

console.log(unique(numbers));
