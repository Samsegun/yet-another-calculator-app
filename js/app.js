const numberCodes = [
  42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 61,
];

// input.addEventListener("keyup", (e) => {
//   e.stopPropagation();
//   e.stopImmediatePropagation();
//   e.preventDefault();
//   if (input.value.length <= 32) {
//     input.textContent += e.key;
//   }
// });

del.addEventListener("click", () => {
  input.value = input.value.slice(0, input.value.length - 1);
});

reset.addEventListener("click", () => {
  input.value = "";
});

equals.addEventListener("click", () => {
  try {
    input.value = eval(input.value);
  } catch {
    throw { messsage: "invalid operation!" };
  }
  // input.value = eval(input.value);
  // input.textContent = eval(input.textContent);
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (input.value.length <= 32) {
      input.value += number.dataset.num;
    } else {
      console.log("error");
    }
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (input.value === "") {
      console.log("error");
    } else {
      input.value += op.dataset.operator;
    }
  });
});
