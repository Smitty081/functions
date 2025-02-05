var contestants = [
    { name: 'Aaron', winner: false },
    { name: 'Sarah', winner: true },
    { name: 'Isaiah', winner: true }
]

var firstWinner = contestants.find(function (contestant) {
    return contestant.winner;
});
console.log(firstWinner);

var users = [
    { id: 1, username: 'Susan19', admin: false },
    { id: 2, username: 'Antonio10', admin: false },
    { id: 3, username: 'Fred15', admin: true },
    { id: 4, username: 'Tim43', admin: false },
    { id: 5, username: 'JimBob59', admin: true },
    { id: 6, username: 'Clark6', admin: false },
    { id: 7, username: 'Jameson35', admin: true },
    { id: 8, username: 'Jessica40', admin: false },
    { id: 9, username: 'Jaleesa13', admin: false },
    { id: 10, username: 'Yoni45', admin: false }
];

var selectedUser = users.find(function (user) {
    return user.username === "JimBob59";
});

console.log(selectedUser);

var shoes = [
    { name: 'Nike', price: 200 },
    { name: 'Red Wings', price: 250 },
    { name: 'Vans', price: 150 },
    { name: 'Converse', price: 160 },
    { name: 'Reebok', price: 130 },
    { name: 'New Balance', price: 175 },
    { name: 'Adidas', price: 95 },
    { name: 'Keds', price: 140 },
    { name: 'Crocs', price: 135 }
];

var lessThan100 = shoes.find(function (shoe) {
    return shoe.price < 100;
});

console.log(lessThan100);

var findWhere = function (array, objCriteria) {
    var property = Object.keys(objCriteria)[0];

    var result = array.find(function (element) {
        return element[property] === objCriteria[property];
    });

    return result;
}

console.log(findWhere(shoes, { price: 95 }));