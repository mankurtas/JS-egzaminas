/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const output = document.getElementById("output");

const cars = async () => {
  try {
    const resolve = await fetch(ENDPOINT);
    const data = await resolve.json();
    console.log(data);
    createCard(data);
  } catch (error) {
    console.log(error);
  }
};

cars();

const createCard = (data) => {
  data.forEach((element) => {
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card border-success mb-3");
    const header = document.createElement("div");
    header.setAttribute("class", "card-header");
    header.innerHTML = element.brand;

    const ul = document.createElement("ul");
    ul.setAttribute("class", "list-group");

    element.models.forEach((item) => {
      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item list-group-item-info");
      li.innerHTML = item;
      ul.append(li);
    });

    divCard.append(header, ul);
    output.append(divCard);
  });
};
