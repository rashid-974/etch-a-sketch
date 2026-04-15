const container = document.getElementById("container");
const resizeBtn = document.getElementById("resize-btn");

container.style.width = "960px";
container.style.height = "960px";

let width = 16;

resizeBtn.addEventListener("click", () => {
    getWidth();
    createGrid();
    console.log(width);
})


createGrid();

function getWidth() {
    const newWidth = prompt("Give a width less than or equal to 100;");

    if (newWidth <= 100) {
        width = Number(newWidth);
        area = width * width;
        squareWidth = 960 / width;
    } else {return}
}

function createGrid() {
    container.innerHTML = "";


    const area = width * width;
    const squareWidth = 960 / width;
    for (let i = 1; i <= area; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
    }

    const squares = document.querySelectorAll(".square");

    squares.forEach((cell) => {
    cell.style.width = `${squareWidth}px`;
    cell.style.height = `${squareWidth}px`;

    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "red";
    })
    })
}