const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let prent = this.parentNode;
    prent.classList.add("focus");
}

function blurFunc() {
    let prent = this.parentNode;
    if (this.value == "") {
        prent.classList.remove("focus");
    }
}


inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})