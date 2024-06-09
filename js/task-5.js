const clickMe = document.querySelector(`.change-color`);
const changeColor = document.querySelector(`body`);
const color = document.querySelector(`color`);

console.log(changeColor);
console.log(clickMe);

changeColor.style.backgroundColor = clickMe.addEventListener(`click`, getRandomHexColor);

function getRandomHexColor() {
  // changeColor.style.backgroundColor = `green`;
  
  // changeColor.style.backgroundColor = Math.floor(Math.random() * 16777215 );
  //   console.log(changeColor.style.backgroundColor);
  
  
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
