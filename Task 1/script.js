/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const input = document.getElementById("search");
const submit = document.getElementById("submit-btn");
const output = document.getElementById("output");

const toLbs = (weight) => weight * 2.2046;
const toGrams = (weight) => weight / 0.001;
const toOz = (weight) => weight * 35.274;

const convertWeight = (e) => {
  e.preventDefault();
  const inputWeight = input.value;

  if (isNaN(inputWeight)) {
    output.innerHTML = "You entered not a number. Please enter a number.";
    output.style.cssText =
      "background-color: #e2c8c8; color: red; font-size: 1.1em; max-width: 80%; margin: 50px auto; text-align: center; padding: 1.5rem;  ";

    input.value = "";
  } else {
    console.log(input.value);
    output.innerHTML =
      "Weight in lbs: " +
      toLbs(inputWeight) +
      " lb." +
      "<br />" +
      "Weight in grams: " +
      toGrams(inputWeight) +
      " g." +
      "<br />" +
      "Weigt in ounces: " +
      toOz(inputWeight) +
      " oz.";

    output.style.cssText =
      "background-color: #c7a959; color: green; font-size: 2.5em; max-width: 80%; margin: 50px auto; text-align: center; padding: 1.5rem;  ";

    input.value = "";
  }
};

submit.addEventListener("click", convertWeight);
