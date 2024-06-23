const btClick = document.querySelector(`.change-color`);
const changeColor = document.querySelector(`body`);
const color = document.querySelector(`.color`);

btClick.addEventListener(`click`, getRandomHexColor);
// console.log(btClick);   // перевірка 
     

function getRandomHexColor() {   //  використання ф-ції для генерації кольору
        changeColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;  //  переклад для виводу на rgb
          color.textContent = changeColor.style.backgroundColor;
  return 
}



  