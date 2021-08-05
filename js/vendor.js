const wrapper = document.querySelector(".wrapper");
const contentWrapper = document.querySelector(".content-wrapper");
const toggleBox = document.querySelectorAll(".box");
const slide = document.querySelector(".slide");
const slider = document.querySelector(".slider");
const input = document.querySelector(".screen input");
const keysWrapper = document.querySelector(".keys-wrapper");
const buttons = document.querySelectorAll(
  ".keys-wrapper .keys button:not(.ctrl)",
);
const numbers = document.querySelectorAll("button[data-num]");
const operators = document.querySelectorAll("button[data-operator]");
const del = document.getElementById("del");
const reset = document.getElementById("reset");
const equals = document.getElementById("equals");
const backDrop = document.querySelector(".backdrop");
const notification = document.querySelector(".notification");

// global identifiers
const DARKGRAY = "dark-gray";
const LIGHT = "light";
const MAGENTA = "magenta";

// function for toggling classes on slider
// 1st&2nd parameters are classes to be removed
// last parameter is the class to be added
function addRemove(class1, class2, class3) {
  slider.classList.remove(class1, class2);
  slider.classList.add(class3);
}
