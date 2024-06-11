const btClick = document.querySelector(`.change-color`);
const changeColor = document.querySelector(`body`);
const color = document.querySelector(`.color`);

btClick.addEventListener(`click`, getRandomHexColor);
// console.log(btClick);   // перевірка 

function getRandomHexColor() {
  color.textContent = `#${Math.floor(Math.random() * 16777215 )}`;
    changeColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215 )}`;  //  переклад для виводу на rgb 
    
}


  