const boxes = document.querySelector(`#boxes`);
console.dir(boxes);
const inputUser = document.querySelector(`.input`);
const createkUser = document.querySelector(`button[data-create]`);
const destroyUser = document.querySelector(`button[data-destroy]`);


inputUser.addEventListener(`change`, (event)=> {
  event.preventDefault();
  // console.log(event);  //  перевірка об'єкту
    // console.log(event.currentTarget.value);  //  перевірка вводу
    const divCreate = event.currentTarget.value;
   
    createkUser.addEventListener(`click`, (event)=> {  //  добавлення <div>
      // console.log("create");  //  перевірка  clickUser
    if (divCreate >= 1 && divCreate <= 100 ){
      for (let i = 0; i < divCreate; i++ ){
        const heading = document.createElement(`div`);
        heading.classList.add("title")
        boxes.append(heading);
      };
    } else {console.log(`Введфть число від 1 до 100!`)};
    
    });
    event.currentTarget.value = "";

    destroyUser.addEventListener(`click`, (event)=> {   //  видалення <div>
      // console.log("delete");  //  перевірка  clickUser
      // console.log(divCreate)  // перевірка введеного числа

      for (let i = divCreate; i != 0; i-- ){
        const heading = document.querySelector(`.title`);
        heading.remove();
      };
    });
  })






// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
