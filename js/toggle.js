// event listener for toggleswitch
toggleBox.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (box.classList.contains("check-1_box")) {
      addRemove(LIGHT, MAGENTA, DARKGRAY);
      wrapper.style.backgroundColor = "var(--theme-1-bg)";
      contentWrapper.style.color = "var(--white)";
      slide.style.backgroundColor = "";
      input.style.backgroundColor = "var(--theme-1-screen)";
      keysWrapper.style.backgroundColor = "var(--theme-1-tgkp)";
      buttons.forEach((button) => {
        button.style.backgroundColor = "";
        button.style.color = "";
        button.style.boxShadow = "";
      });
      del.style.backgroundColor = "";
      del.style.boxShadow = "";
      reset.style.backgroundColor = "";
      reset.style.boxShadow = "";
      equals.style.backgroundColor = "";
      equals.style.boxShadow = "";
    } else if (box.classList.contains("check-2_box")) {
      addRemove(DARKGRAY, MAGENTA, LIGHT);
      wrapper.style.backgroundColor = "var(--theme-2-bg)";
      contentWrapper.style.color = "var(--theme-2-grayellow)";
      slide.style.backgroundColor = "var(--theme-2-tgkp)";
      input.style.backgroundColor = "var(--theme-2-screen)";
      keysWrapper.style.backgroundColor = "var(--theme-2-tgkp)";
      buttons.forEach((button) => {
        button.style.backgroundColor = "var(--theme-2-kb)";
        button.style.color = "inherit";
        button.style.boxShadow = "0px 5px 0px var(--theme-2-ks)";
      });
      del.style.backgroundColor = "var( --theme-2-keybg)";
      del.style.boxShadow = "0px 5px 0px var(--theme-2-keysw)";
      reset.style.backgroundColor = "var(--theme-2-keybg)";
      reset.style.boxShadow = "0px 5px 0px var(--theme-2-keysw)";
      equals.style.backgroundColor = "var(--theme-2-keytg)";
      equals.style.boxShadow = "0px 5px 0px var(--theme-2-keytgsw)";
    } else {
      addRemove(DARKGRAY, LIGHT, MAGENTA);
      wrapper.style.backgroundColor = "var(--theme-3-bg)";
      contentWrapper.style.color = "var(--theme-3-lightyellow)";
      slide.style.backgroundColor = "var(----theme-3-tgkp)";
      input.style.backgroundColor = "var(--theme-3-tgkpsbg)";
      keysWrapper.style.backgroundColor = "var(--theme-3-tgkpsbg)";
      buttons.forEach((button) => {
        button.style.backgroundColor = "var(--theme-3-kb)";
        button.style.color = "inherit";
        button.style.boxShadow = "0px 5px 0px var(--theme-3-ks)";
      });
      del.style.backgroundColor = "var( --theme-3-keybg)";
      del.style.boxShadow = "0px 5px 0px var(--theme-3-keysw)";
      reset.style.backgroundColor = "var(--theme-3-keybg)";
      reset.style.boxShadow = "0px 5px 0px var(--theme-3-keysw)";
      equals.style.backgroundColor = "var(--theme-3-keytg)";
      equals.style.boxShadow = "0px 5px 0px var(--theme-3-keytgsw)";
    }
  });
});
