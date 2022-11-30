import _ from "lodash";
import style from "./index.scss";
import "./clearButton";
import logo from "./assets/icon-square-big.png";
import "./assets/fonts/FuzzyBubbles-Regular.ttf";

const logoEl = document.getElementById("logo");
logoEl.src = logo;

const buttonEl = document.getElementById("button1");
buttonEl.classList.add([style.button]);
buttonEl.addEventListener("click", function () {
  const el = document.getElementById("header");
  el.innerHTML = "Hey I have updated the code";
  el.classList.add([style.header]);

  const listItems = ["Apple", "orange", "Banana"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItems, function (item) {
    const tempEl = document.createElement("li");
    tempEl.innerHTML = item;
    ul.appendChild(tempEl);
  });
});
