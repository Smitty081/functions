
var posts = [
    { text: "cursus in hac habitasse platea", platform: "twitter" },
    { text: "egestas erat imperdiet sed euismod", platform: "facebook" },
    { text: "risus viverra adipiscing at in", platform: "facebook" },
    { text: "ullamcorper eget nulla facilisi etiam", platform: "instagram" },
    { text: "feugiat pretium nibh ipsum consequat", platform: "twitter" },
    { text: "sit amet mattis vulputate enim", platform: "facebook" },
];

// var tweets = [];
// 
// for (var i = 0; i < posts.length; i++) {
// if (posts[i].platform === "twitter") {
// tweets.push(posts[i]);
// }
// }

var tweets = posts.filter(function (post) {
    return post.platform === "twitter";
});

console.log(tweets);

var languages = ["JavaScript", "Ruby", "Java", "Python", "C", "Swift"];
var shortLanguages = languages.filter(function (short) {
    return short.length <= 4;
});
console.log(shortLanguages);

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

var fairPrice = shoes.filter(function (fair) {
    return fair.price = 50 && fair.price <= 100;
});

console.log(fairPrice);

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

var filterOut = function (array, iteratorFunction) {
    return array.filter(function (item) {
        return iteratorFunction(item);
    });
};

var priceRangeNot50to100 = filterOut(shoes, function (shoe) {
    return shoe.price > 100;
});

console.log(priceRangeNot50to100);