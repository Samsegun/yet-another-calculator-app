// event listener for toggleswitch
toggleBox.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (box.classList.contains(CHECKBOX1)) {
      addRemoveFromClass(slider, LIGHT, MAGENTA, DARKGRAY);
      addRemoveFromClass(wrapper, THEME2BG, THEME3BG, THEME1BG);
      addRemoveFromClass(contentWrapper, THEME2COLOR, THEME3COLOR, THEME1COLOR);
      addRemoveFromClass(slide, THEME2SLIDE, THEME3SLIDE, THEME1SLIDE);
      addRemoveFromClass(input, THEME2SCREEN, THEME3SCREEN, THEME1SCREEN);
      addRemoveFromClass(
        keysWrapper,
        THEME2KWRAPPER,
        THEME3KWRAPPER,
        THEME1KWRAPPER,
      );
      buttons.forEach((button) => {
        addRemoveFromClass(button, THEME2BUTTON, THEME3BUTTON, THEME1BUTTON);
      });
      addRemoveFromClass(del, THEME2SAME, THEME3SAME, THEME1SAME);
      addRemoveFromClass(reset, THEME2SAME, THEME3SAME, THEME1SAME);
      addRemoveFromClass(equals, THEME2EQUALS, THEME3EQUALS, THEME1EQUALS);
    } else if (box.classList.contains(CHECKBOX2)) {
      addRemoveFromClass(slider, MAGENTA, DARKGRAY, LIGHT);
      addRemoveFromClass(wrapper, THEME1BG, THEME3BG, THEME2BG);
      addRemoveFromClass(contentWrapper, THEME1COLOR, THEME3COLOR, THEME2COLOR);
      addRemoveFromClass(slide, THEME1SLIDE, THEME3SLIDE, THEME2SLIDE);
      addRemoveFromClass(input, THEME1SCREEN, THEME3SCREEN, THEME2SCREEN);
      addRemoveFromClass(
        keysWrapper,
        THEME1KWRAPPER,
        THEME3KWRAPPER,
        THEME2KWRAPPER,
      );
      buttons.forEach((button) => {
        addRemoveFromClass(button, THEME1BUTTON, THEME3BUTTON, THEME2BUTTON);
      });
      addRemoveFromClass(del, THEME1SAME, THEME3SAME, THEME2SAME);
      addRemoveFromClass(reset, THEME1SAME, THEME3SAME, THEME2SAME);
      addRemoveFromClass(equals, THEME1EQUALS, THEME3EQUALS, THEME2EQUALS);
    } else {
      addRemoveFromClass(slider, LIGHT, DARKGRAY, MAGENTA);
      addRemoveFromClass(wrapper, THEME1BG, THEME2BG, THEME3BG);
      addRemoveFromClass(contentWrapper, THEME1COLOR, THEME2COLOR, THEME3COLOR);
      addRemoveFromClass(slide, THEME1SLIDE, THEME2SLIDE, THEME3SLIDE);
      addRemoveFromClass(input, THEME1SCREEN, THEME2SCREEN, THEME3SCREEN);
      addRemoveFromClass(
        keysWrapper,
        THEME1KWRAPPER,
        THEME2KWRAPPER,
        THEME3KWRAPPER,
      );
      buttons.forEach((button) => {
        addRemoveFromClass(button, THEME1BUTTON, THEME2BUTTON, THEME3BUTTON);
      });
      addRemoveFromClass(del, THEME1SAME, THEME2SAME, THEME3SAME);
      addRemoveFromClass(reset, THEME1SAME, THEME2SAME, THEME3SAME);
      addRemoveFromClass(equals, THEME1EQUALS, THEME2EQUALS, THEME3EQUALS);
    }
  });
});
