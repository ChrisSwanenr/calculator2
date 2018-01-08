var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};

var multi = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));



alert("The sum is: " + add(number1, number2));
alert("The difference is: " + sub(number1, number2));
alert("The product is: " + multi(number1, number2));
alert("The dividend is " + divide(number1, number2));
