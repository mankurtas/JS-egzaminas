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
    input.value = "";
  } else {
    console.log(input.value);
    output.innerHTML =
      "Svoris svarais: " +
      toLbs(inputWeight) +
      " lb." +
      "<br />" +
      "Svoris gramais: " +
      toGrams(inputWeight) +
      " g." +
      "<br />" +
      "Svoris uncijomis: " +
      toOz(inputWeight) +
      " oz.";

    input.value = "";
  }
};

submit.addEventListener("click", convertWeight);
