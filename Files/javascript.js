console.log("hello world")





let gridBox = document.querySelectorAll(".gridBox");


let firstButton = document.createElement("button");
firstButton.innerText = "Resize Grid"
firstButton.classList.add("newButton")
firstButton.addEventListener("click",() => renovateSize())
document.body.appendChild(firstButton)

function renovateSize() {
    let userInput = prompt("Write in the format of a number to resize the grid ")
    let size = Number(userInput)
    
    if (size > 100) {
        console.log("Website may crash if grid is more than 100x100")
    } else if (size < 3    ) {
        console.log("At this point you can't use it , keep it alteast 3x3") 
    } else if (isNaN(size) || userInput === "") {
        console.log("Please enter a number")
    } else {
        let container = document.querySelector(".container")
        container.innerText = ""     // being outside the loop clears the grid once , instead of clearing it again and again
        for (let i = 0; i < size*size; i++) {

    let gridBox = document.createElement("div")
    

    gridBox.classList.add("gridBox")
    

    let boxSize = 100/size;
    gridBox.style.width =  `${boxSize}%`
        gridBox.addEventListener("mouseenter",() =>
    gridBox.classList.add("className"))

     container.appendChild(gridBox) // appends all the blocks present in the loop , instead of only appending on box
 
}
   
 console.log(userInput)}
 
}


  
