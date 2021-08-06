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

// identifiers for chechbox
const CHECKBOX1 = "check-1_box";
const CHECKBOX2 = "check-2_box";
const CHECKBOX3 = "check-3_box";

// identifiers for slider
const DARKGRAY = "dark-gray";
const LIGHT = "light";
const MAGENTA = "magenta";

// identifiers for wrapper
const THEME1BG = "theme-1-bg";
const THEME2BG = "theme-2-bg";
const THEME3BG = "theme-3-bg";

// identifiers for content wrapper
const THEME1COLOR = "theme-1-color";
const THEME2COLOR = "theme-2-color";
const THEME3COLOR = "theme-3-color";

// identifiers for slide
const THEME1SLIDE = "theme-1-slide";
const THEME2SLIDE = "theme-2-slide";
const THEME3SLIDE = "theme-3-slide";

// identifiers for input
const THEME1SCREEN = "theme-1-screen";
const THEME2SCREEN = "theme-2-screen";
const THEME3SCREEN = "theme-3-screen";

// identifiers for keys wrapper
const THEME1KWRAPPER = "theme-1-kwrapper";
const THEME2KWRAPPER = "theme-2-kwrapper";
const THEME3KWRAPPER = "theme-3-kwrapper";

// identifiers for buttons
const THEME1BUTTON = "theme-1-button";
const THEME2BUTTON = "theme-2-button";
const THEME3BUTTON = "theme-3-button";

// identifiers for delete and reset
const THEME1SAME = "theme-1-same";
const THEME2SAME = "theme-2-same";
const THEME3SAME = "theme-3-same";

// identifiers for equals
const THEME1EQUALS = "theme-1-equals";
const THEME2EQUALS = "theme-2-equals";
const THEME3EQUALS = "theme-3-equals";

// functions for toggling classes
// 1st parameter is the element itself
// 2nd&3rd parameters are classes to be removed
// last parameter is the class to be added
function addRemoveFromClass(element, class1, class2, class3) {
  element.classList.remove(class1, class2);
  element.classList.add(class3);
}
