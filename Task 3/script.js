/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const btnShowUsers = document.getElementById("btn");
const outputDiv = document.getElementById("output");

const showUsers = async () => {
  try {
    const resolve = await fetch(ENDPOINT);
    const data = await resolve.json();
    console.log(data);
    createUserCard(data);
  } catch (error) {
    console.log(error);
  }
};

const createUserCard = (data) => {
  outputDiv.innerHTML = "";

  data.forEach((element) => {
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");

    const img = document.createElement("img");
    img.setAttribute("src", element.avatar_url);
    img.setAttribute("alt", "Avatar");

    const divContainer = document.createElement("div");
    divContainer.setAttribute("class", "container");
    divContainer.innerHTML = element.login;

    divCard.append(img, divContainer);
    outputDiv.append(divCard);
  });
};

btnShowUsers.addEventListener("click", showUsers);
