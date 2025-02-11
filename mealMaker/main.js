
var menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        var dish = {
            name: dishName,
            price: dishPrice,
        };
        this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        var dishes = this.courses[courseName];
        var randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main = this.getRandomDishFromCourse("mains");
        const dessert = this.getRandomDishFromCourse("desserts");
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} The price is $${totalPrice}.`;
    }

};

menu.addDishToCourse("appetizers", "Eggrolls", 8);
menu.addDishToCourse("appetizers", "Wings", 11);
menu.addDishToCourse("appetizers", "Smoked hard boiled egg", 2);

menu.addDishToCourse("mains", "The Classic", 14);
menu.addDishToCourse("mains", "Chicken parm", 20);
menu.addDishToCourse("mains", "Ribeye", 40.25);

menu.addDishToCourse("desserts", "Cheesecake", 9);
menu.addDishToCourse("desserts", "Chocolate covered strawberries", 8);
menu.addDishToCourse("desserts", "Ice cream", 6);


let meal = menu.generateRandomMeal();
console.log(meal);
