const underlineBlock = (block, border) => {
  const allColorsButtonsArray = [...document.querySelectorAll(block)];
  allColorsButtonsArray.map((button) => {
    button.addEventListener("click", () => {
      allColorsButtonsArray.map((color) => {
        color.style.borderBottom = "0px";
      });
      button.style.borderBottom = border;
    });
  });
};

export default underlineBlock;

// example underlineBlock('#colors_list_item', '2px solid greenyellow');
// example underlineBlock('#size_list_item', '2px solid greenyellow');
