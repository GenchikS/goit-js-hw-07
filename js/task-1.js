const categories = document.querySelectorAll(`.item`);
const category = document.querySelectorAll(`.title`);
const elements = document.querySelectorAll(`.list`);
console.log(`Number of categories: ${categories.length}`)


const result = category.forEach(function(category, index, el){
    console.dir(`Category: ${category.textContent}`);
       console.log(`Elements:`, elements.length);
})

