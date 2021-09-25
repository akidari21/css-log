/*  Grid Visualizer
//  Author: Chaney */

let select = document.getElementById("selectgrid");
let display = document.getElementById("grid-display");
// grid properties
let grid = document.querySelector(".grid");
let gap = document.getElementById("gap");

document.addEventListener("DOMContentLoaded", (e) => {
  grid.style.cssText += "; gap: " + gap.value + ";";
  e.stopPropagation();
});

// add, remove item button
document.getElementById("addItem").addEventListener("click", function () {
  let idx = grid.querySelectorAll(".item").length + 1;
  grid.innerHTML += "<div class='item'>item " + idx + "</div>";
});
document.getElementById("removeItem").addEventListener("click", function () {
  grid.removeChild(grid.lastElementChild);
});

select.addEventListener("change", function (e) {
  display.innerText = e.target.value;
  grid.style.cssText += "display:" + e.target.value;
});

// 코드 최적화 이후
let control = document.querySelector(".control-grid");
// 부모 요소에서 하나의 이벤트 리스너로 적용!
control.addEventListener("keyup", function (e) {
  if (e.target !== e.currentTarget) {
    if (e.target.value) {
      grid.style.cssText += e.target.id + ":" + e.target.value;
    } else {
      let defaultVal = "none";
      if (e.target.id === "gap") {
        defaultVal = "normal";
      } else if (e.target.id === "grid-auto-rows") {
        defaultVal = "auto";
      } else if (e.target.id === "justify-items") {
        defaultVal = "stretch";
      }
      grid.style.cssText += e.target.id + ":" + defaultVal;
    }
  }
  e.stopPropagation();
});

/*
// Card Position
*/
let cardDirection = document.getElementById("flex-direction");
let cardAlign = document.getElementById("parent_align-items");
let card = document.querySelector(".card");
let cardContent = document.querySelector(".card-content");
let controlCard = document.querySelector(".control-card");

document.addEventListener("DOMContentLoaded", (e) => {
  cardContent.style.cssText += "flex-direction: " + cardDirection.value + ";";
  card.style.cssText += "align-items: " + cardAlign.value + ";";
  e.stopPropagation();
});

// 부모 요소에서 하나의 이벤트 리스너로 적용!
controlCard.addEventListener("keyup", function (e) {
  if (e.target !== e.currentTarget) {
    let parentId = e.target.id.split("_");

    console.log(parentId[0] + parentId[1]);

    if (parentId[0] !== "parent") {
      if (e.target.value) {
        cardContent.style.cssText += e.target.id + ":" + e.target.value;
      } else {
        let defaultVal = "auto";
        if (e.target.id === "justify-content") {
          defaultVal = "normal";
        } else if (e.target.id === "align-items") {
          defaultVal = "stretch";
        } else if (e.target.id === "flex-direction") {
          defaultVal = "row";
        }
        cardContent.style.cssText += e.target.id + ":" + defaultVal;
      }
    } else {
      if (e.target.value) {
        card.style.cssText += parentId[1] + ":" + e.target.value;
      } else {
        card.style.cssText += parentId[1] + ": stretch";
      }
    }
  }
  e.stopPropagation();
});
