/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btn = document.getElementById("btn__element");
const btn_status = document.getElementById("btn__state");

let current = 0;

const counter = (event) => {
  event.preventDefault();

  current += 1;
  btn_status.innerHTML = current;
};
