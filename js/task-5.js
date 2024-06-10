const btClick = document.querySelector(`.change-color`);
const changeColor = document.querySelector(`body`);
const color = document.querySelector(`.color`);

console.log(changeColor);
console.log(btClick);

btClick.addEventListener(`click`, getRandomHexColor);


function getRandomHexColor() {
 
  changeColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215 )}`;
    color.textContent = changeColor.style.backgroundColor;
}


  