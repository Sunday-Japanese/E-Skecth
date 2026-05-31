console.log("hello world")



for (let i = 0; i < 256; i++) {
    let gridBox = document.createElement("div")
    let container = document.querySelector(".container")
    gridBox.classList.add("gridBox")
    container.appendChild(gridBox)
}

let selectBox = document.querySelectorAll("gridBox")



