// Cleaner version.

var shoes = [
    { name: 'Nike', price: 200 },
    { name: 'Red Wings', price: 250 },
    { name: 'Vans', price: 50 },
    { name: 'Converse', price: 60 },
    { name: 'Reebok', price: 130 },
    { name: 'New Balance', price: 75 },
    { name: 'Adidas', price: 95 },
    { name: 'Keds', price: 40 },
    { name: 'Crocs', price: 35 }
];


var allMoreThan75 = shoes.some(function (shoe) {
    return shoe.price > 75;
});
console.log(allMoreThan75);
// Are some shoes less than 75?
var someLessThan75 = shoes.every(function (shoe) {
    return shoe.price <= 75;
});

console.log(someLessThan75);

// This is a longer way.
var allMoreThan75 = null;

for (var i = 0; i < shoes.length; i++) {
    if (shoes[i].price < 75) {
        allMoreThan75 = false;
        break;
    } else {
        allMoreThan75 = true;
    }
}
console.log(allMoreThan75);