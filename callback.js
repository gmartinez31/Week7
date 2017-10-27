// Rewrite the following normal functions into callback functions. //
// function add(x, y) {
//     var result = x + y;
//     return result;
// }
// function subtract(x, y) {
//     return x - y;
// }
// function greeting(person) {
//     return 'Hola, ' + person + '!';
// }
// function product(numbers) {
//     return numbers.reduce(function (a, b) {
//         return a * b;
//     }, 1);
// }
arr = [1,2,3,4,5]
function add (x, y, callback) {
    var result = x+y;
    callback(result);
}
var subtract = function (x, y, callback) {
    var result = x-y;
    callback(result);
}
var greeting = function (person, callback) {
    var greet = 'hola, ' + person + '!';
    callback(greet)
}
var product = function (numbers, callback) {
    var reduced = numbers.reduce(function (a,b) {
        return a * b;
    }, 1);
    callback(reduced);
}

var addeth = add(1,3, function(result) {
    console.log(result);
});
var subeth = subtract(10, 5, function (result) {
    console.log(result * 10);
});
var greeth = greeting('Jimmy', function(greet) {
    console.log(greet);
});
var number = [2, 4, 6, 8, 10]
var produce = product(arr, function(reduced) {
    console.log(reduced);
});

// // Add a 1000 millisecond delay to the callback versions of the exercise above. //

var addone = function (x, y, callback) {
    setTimeout(function () {
        var result = x + y;
        callback(result);
    }, 1000);
}

var addeths = addone(3, 3, function (result) {
    console.log(result);
});