/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {}

Calculator.prototype.sum = function (number1, number2) {
  return number1 + number2;
};

Calculator.prototype.subtraction = function (number1, number2) {
  return number1 - number2;
};

Calculator.prototype.multiplication = function (number1, number2) {
  return number1 * number2;
};

Calculator.prototype.division = function (number1, number2) {
  return number1 / number2;
};

const test1 = new Calculator();

console.log(test1.sum(5, 5));
console.log(test1.subtraction(5, 5));
console.log(test1.multiplication(5, 5));
console.log(test1.division(5, 5));
