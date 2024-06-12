const inputUser = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

inputUser.addEventListener("input", (event) => {
        output.textContent = event.currentTarget.value;
    if (output.textContent.includes(` `) || !output.textContent.includes(``)){
        output.textContent = (event.currentTarget.value).trim();
    } else{
        output.textContent = "Anonymous";
    }
});



