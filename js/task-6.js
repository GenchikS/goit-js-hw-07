let inputUser = document.querySelector(`input`);
const createClickUser = document.querySelector(`button[data-create]`)
const destroyClickUser = document.querySelector(`button[data-destroy]`)

      let widthUser = 20;
      let heighthUser = 20;

  createClickUser.addEventListener("click", createClick);
  destroyClickUser.addEventListener("click", destroyClick);

function createClick(){
  boxes.innerHTML = "";  
  if (inputUser.value >= 1 && inputUser.value <= 100 ){
    // console.log((inputUser));   //  перевірка  clickUser
    let heading  = [];
    let headingAll  = [];
          for (let i = 1; i <= inputUser.value; i++ ){
            widthUser = widthUser + 10;
            heighthUser = heighthUser + 10;

            heading = document.createElement(`div`);
            heading.style.width = `${widthUser}px`;
            heading.style.height =  `${heighthUser}px`;
            heading.style.backgroundColor = getRandomHexColor();
            headingAll.push(heading)
            }
            boxes.append(...headingAll);
            widthUser = 20;
            heighthUser = 20;
          } 
  };

function destroyClick() {   //  ф-ція видалення вмісту контейнера boxes
    boxes.innerHTML = "";  
}

function getRandomHexColor() {   //  використання ф-ції для генерації кольору 
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
