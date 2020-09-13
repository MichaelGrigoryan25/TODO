const checkbox = document.getElementById("checkbox");
const title = document.getElementById("title");
const container = document.getElementById("container");

container.onload = checkbox.addEventListener("click", checkDoneClass);

function checkDoneClass() {

    if (checkbox.checked) {
        title.classList.add("done");
    } else {
        title.classList.remove("done");
    }
}