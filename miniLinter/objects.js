// Objects are key value items.
// etting properties
var car = {
    color: 'red',
    wheels: 4,
    speed: "fast"
};

console.log(car);

function car() {
    color: red;
    wheels: 4;
};

car.speed = 10;
car.make = "Subaru";

console.log(car);

function setPropertyOnObject(object, prop, value) {
    object[prop] = value;
};
setPropertyOnObject(car, "speed", 20);
console.log(car);
// Object Methods.

//

var myDriveFunc = function () {
    console.log('vroom!');
}

var car = {
    color: 'red',
    wheels: 4,
    drive: function () {
        console.log("vroom!");
    },

    engine: {
        horsepower: 500,
        cylinders: 8,
        liter: 3.8,
        turbo: {
            format: 'straight',
            quanity: 2,
        }
    }
}
myDriveFunc();





