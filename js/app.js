// this notifies the user for input error
function notify() {
  notification.classList.remove("close");
  backDrop.classList.remove("close");
  setTimeout(() => {
    notification.classList.add("close");
    backDrop.classList.add("close");
  }, 3000);
}

let dotCount = 0;

// key codes for numbers and operators
// key code number 13 is for "enter key"
const numberCodes = [
  42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 61,
];

input.addEventListener("keypress", (e) => {
  // 1st 3 lines of code prevent default behaviours
  // atimes on "keypress", user might get double output
  // still finding ways of fixing this bug
  e.stopPropagation();
  e.stopImmediatePropagation();
  e.preventDefault();
  // if (e.keyCode === 46) {
  //   input.value += e.key;
  //   point.disabled = true;
  // }
  if (numberCodes.includes(e.keyCode)) {
    input.value += e.key;
  } else if (e.keyCode === 13) {
    try {
      input.value = eval(input.value);
    } catch {
      notify();
    }
  }
});

del.addEventListener("click", () => {
  let cut = input.value.slice(0, input.value.length - 1);
  input.value = cut;
  if (!input.value.includes(".")) {
    point.disabled = false;
  }
});

reset.addEventListener("click", () => {
  input.value = "";
  point.disabled = false;
});

equals.addEventListener("click", () => {
  try {
    input.value = eval(input.value);
  } catch {
    notify();
  }
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.dataset.num === ".") {
      input.value += number.dataset.num;
      dotCount++;
      point.disabled = true;
    } else if (input.value.length <= 32) {
      input.value += number.dataset.num;
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (input.value !== "" && input.value.length <= 32) {
      input.value += op.dataset.operator;
    } else {
      notify();
    }
  });
});
