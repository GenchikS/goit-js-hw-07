const inputUser = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);


inputUser.addEventListener("keydown", event => {
        const keyUser = `event.key`;
        console.log("Key: ", event.code);
        console.log("Key: ", event.key);
        // console.log("Key: ", event);
        
        if (keyUser ==="Space" || output.textContent === ""){
            output.textContent = `Anonymous`;
        } else {
            inputUser.addEventListener("input", event => {
                output.textContent = event.currentTarget.value;
        });
        }
        output.textContent = event.currentTarget.value.trim();
    });



