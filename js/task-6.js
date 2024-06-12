// const boxes = document.querySelector(`#boxes`);
// console.dir(boxes);
// const inputUser = document.querySelector(`.input`);
// const createkUser = document.querySelector(`button[data-create]`);
// const destroyUser = document.querySelector(`button[data-destroy]`);


// inputUser.addEventListener(`change`, (event)=> {
//   event.preventDefault();
  
//   // console.log(event);  //  перевірка об'єкту
//     // console.log(event.currentTarget.value);  //  перевірка вводу
//     const divCreate = event.currentTarget.value;
   
//     createkUser.addEventListener(`click`, (event)=> {  //  добавлення <div>
//       // console.log(event);  //  перевірка об'єкту
//       // console.log("create");  //  перевірка  clickUser
//     if (divCreate >= 1 && divCreate <= 100 ){
//       for (let i = 1; i <= divCreate; i++ ){
//         const heading = document.createElement(`div`);
//         heading.classList.add("title-task-six");
//         boxes.append(heading);
        

//         // const titleTaskSix = document.querySelector(`.title-task-six`)
//         // titleTaskSix.style.width = `${ i * 10 }px`;
//         // titleTaskSix.style.height =  `${ i * 10 }px`;
//         // titleTaskSix.style.backgroundColor = `#${Math.floor(Math.random() * 16777215 )}`
        
//       };
//       } else {alert(`Введіть число від 1 до 100!`)};
//     });
//     event.currentTarget.value = "";
        
//     destroyUser.addEventListener(`click`, (event)=> {   //  видалення <div>
//       // console.log("delete");  //  перевірка  clickUser
//       // console.log(divCreate)  // перевірка введеного числа

//     for (let i = divCreate; i != 0; i-- ){
//         const heading = document.querySelector(`.title-task-six`);
//         heading.remove();
//       };
// });
// })

const inputUser = document.querySelector(`.input`);
const createClickUser = document.querySelector(`button[data-create]`)
const destroyClickUser = document.querySelector(`button[data-destroy]`)


inputUser.addEventListener(`change`, (event) => {
  event.preventDefault();
  const inputUser = event.currentTarget.value; 
  event.currentTarget.value = "";
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

            };
          } else {alert(`Введіть число від 1 до 100!`)};
          // document.querySelector(`.input`).reset();
         
    };
        

    function destroyClick() {   //  ф-ція видалення вмісту контейнера boxes
          boxes.innerHTML = "";  
    }
});

