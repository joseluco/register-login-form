const passInput = document.querySelector("#pwd1")
const passInput2 = document.querySelector("#pwd2")
const togglePassText = document.querySelector(".toggle")
const togglePassText2 = document.querySelector(".toggle2")

/*
togglePassText.addEventListener("click", () => {
    if (passInput.type === "password") {
        passInput.type = "text"
    } else if (passInput.type === "text") {
        passInput.type = "password"
    }
})
*/

togglePassText.addEventListener("click", () => {
    passInput.type === "password" ? passInput.type = "text" : passInput.type = "password"
})

/*
togglePassText2.addEventListener("click", () => {
    passInput2.type === "password" ? passInput2.type = "text" : passInput2.type === "password"
})
*/

togglePassText2.addEventListener("click", () => {
    if (passInput2.type === "password") {
        passInput2.type = "text"
    } else if (passInput2.type === "text") {
        passInput2.type = "password"
    }
})

