const inputUser = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);


inputUser.addEventListener("input", (event) => {
        console.log('event- ',event.target.value);
        console.log('inputUser.textContent.trim()- ',inputUser.textContent.trim());

        if (event.currentTarget.value.trim() === ""){
            output.textContent = `Anonymous`;
        } else{  output.textContent = event.currentTarget.value;
        };
        }
        );



