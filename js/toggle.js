// event listener for toggleswitch
toggleBox.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (box.classList.contains("check-1_box")) {
      addRemove(LIGHT, MAGENTA, DARKGRAY);
      wrapper.classList.remove("theme-2-bg", "theme-3-bg");
      wrapper.classList.add("theme-1-bg");
      contentWrapper.classList.remove("theme-2-color", "theme-3-color");
      contentWrapper.classList.add("theme-1-color");
      slide.classList.remove("theme-2-slide", "theme-3-slide");
      slide.classList.add("theme-1-slide");
      input.classList.remove("theme-2-screen", "theme-3-screen");
      input.classList.add("theme-1-screen");
      keysWrapper.classList.remove("theme-2-kwrapper", "theme-3-kwrapper");
      keysWrapper.classList.add("theme-1-kwrapper");
      buttons.forEach((button) => {
        button.classList.remove("theme-2-button", "theme-3-button");
        button.classList.add("theme-1-button");
      });
      del.classList.remove("theme-2-same", "theme-3-same");
      del.classList.add("theme-1-same");
      reset.classList.remove("theme-2-same", "theme-3-same");
      reset.classList.add("theme-1-same");
      equals.classList.remove("theme-2-equals", "theme-3-equals");
      equals.classList.add("theme-1-equals");
    } else if (box.classList.contains("check-2_box")) {
      addRemove(DARKGRAY, MAGENTA, LIGHT);
      wrapper.classList.remove("theme-1-bg", "theme-3-bg");
      wrapper.classList.add("theme-2-bg");
      contentWrapper.classList.remove("theme-1-color", "theme-3-color");
      contentWrapper.classList.add("theme-2-color");
      slide.classList.remove("theme-1-slide", "theme-3-slide");
      slide.classList.add("theme-2-slide");
      input.classList.remove("theme-1-screen", "theme-3-screen");
      input.classList.add("theme-2-screen");
      keysWrapper.classList.remove("theme-1-kwrapper", "theme-3-kwrapper");
      keysWrapper.classList.add("theme-2-kwrapper");
      buttons.forEach((button) => {
        button.classList.remove("theme-1-button", "theme-3-button");
        button.classList.add("theme-2-button");
      });
      del.classList.remove("theme-1-same", "theme-3-same");
      del.classList.add("theme-2-same");
      reset.classList.remove("theme-1-same", "theme-3-same");
      reset.classList.add("theme-2-same");
      equals.classList.remove("theme-1-equals", "theme-3-equals");
      equals.classList.add("theme-2-equals");
    } else {
      addRemove(DARKGRAY, LIGHT, MAGENTA);
      wrapper.classList.remove("theme-1-bg", "theme-2-bg");
      wrapper.classList.add("theme-3-bg");
      contentWrapper.classList.remove("theme-1-color", "theme-2-color");
      contentWrapper.classList.add("theme-3-color");
      slide.classList.remove("theme-1-slide", "theme-2-slide");
      slide.classList.add("theme-3-slide");
      input.classList.remove("theme-1-screen", "theme-2-screen");
      input.classList.add("theme-3-screen");
      keysWrapper.classList.remove("theme-1-kwrapper", "theme-2-kwrapper");
      keysWrapper.classList.add("theme-3-kwrapper");
      buttons.forEach((button) => {
        button.classList.remove("theme-1-button", "theme-2-button");
        button.classList.add("theme-3-button");
      });
      del.classList.remove("theme-1-same", "theme-2-same");
      del.classList.add("theme-3-same");
      reset.classList.remove("theme-1-same", "theme-2-same");
      reset.classList.add("theme-3-same");
      equals.classList.remove("theme-1-equals", "theme-2-equals");
      equals.classList.add("theme-3-equals");
    }
  });
});
