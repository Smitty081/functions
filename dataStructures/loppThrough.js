var person = {
    name: "Jeff",
    age: 47,
    favoriteFood: "pizza",
    favoriteDrink: "whiskey",
    car: {
        make: "Subaru",
        model: "WRX",
        year: 2014
    },
    city: "Rochester",
    state: "Minnesota",
    married: true,
    kids: 3
};

for (let prop in person) {

    if (typeof person[prop] === 'object') {
        for (let nestedProp in person[prop]) {
            console.log(nestedProp)
        }
    }
}

console.log(person);