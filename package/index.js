function classRemover(elements, clss) {
  elements.forEach((item) => {
    item.classList.remove(clss);
  });
}

function dropDownMenuHandler(
  navbar,
  navItems,
  triggerEventType,
  leaveEventType,
  clss
) {
  navItems.forEach((item) => {
    item.addEventListener(`${triggerEventType}`, () => {
      classRemover(navItems, clss);
      item.classList.add(clss);
    });
  });
  document.addEventListener(`${leaveEventType}`, (e) => {
    if (!e.target.matches(`${navbar.tagName} *`)) {
      classRemover(navItems, clss);
    }
  });
}

module.exports = dropDownMenuHandler;
