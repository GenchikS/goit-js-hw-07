const categories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categories.length}`)

categories.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const list = item.querySelectorAll("ul>li");  //  звернення до li через батька ul 
    console.log(`Cetegory: ${title}`);
    console.log(`Elements: ${list.length}`) //  перевірка довжини
})


