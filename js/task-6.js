const inputUser = document.querySelector(`.input`);
const createClickUser = document.querySelector(`button[data-create]`)
const destroyClickUser = document.querySelector(`button[data-destroy]`)


inputUser.addEventListener(`change`, (event) => {
  event.preventDefault();
  let inputUser = event.currentTarget.value;
      event.currentTarget.value = "";  //  видалення введеного числа
     // console.log((inputUser));  //  перевірка вводу
      
      let widthUser = 10;
      let heighthUser = 10;

  createClickUser.addEventListener("click", createClick);
  destroyClickUser.addEventListener("click", destroyClick);


  function createClick(){

    if (inputUser >= 1 && inputUser <= 100 ){
      // console.log((inputUser));   //  перевірка  clickUser
            for (let i = 1; i <= inputUser; i++ ){
              widthUser = widthUser + 10;
              heighthUser = heighthUser + 10;

              // console.log(widthUser);   //  перевірка  накопичувача
              // console.log(heighthUser);  //  перевірка  накопичувача
              // console.log((inputUser));  //  перевірка  циклу

              const heading = document.createElement(`div`);
              heading.classList.add(`title-task-six`);
              boxes.append(heading);
              heading.style.width = `${widthUser}px`;
              heading.style.height =  `${heighthUser}px`;
              heading.style.backgroundColor = getRandomHexColor();

              function getRandomHexColor() {   //  використання ф-ції для генерації кольору 
                return `#${Math.floor(Math.random() * 16777215)
                  .toString(16)
                  .padStart(6, 0)}`;
              }
             }
            } 
            inputUser = 0;
    };
 
        

    function destroyClick() {   //  ф-ція видалення вмісту контейнера boxes
          boxes.innerHTML = "";  
    }
});

