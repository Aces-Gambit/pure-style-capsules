const dropMenu = document.querySelector(`[data-menu*="drop"]`);
const iconLines = document.querySelectorAll(`[data-icon*="line"]`);

const dropMenuToggle = () => {
  dropMenu.classList.toggle(`hidden`);
  iconLines.forEach((line) => {
    line.classList.toggle(`open`);
  });
};
