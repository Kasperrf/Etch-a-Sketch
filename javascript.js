// Empty classname to add value to later
let className = ""

// Fetching container
let container = document.querySelector(".container")

// Button to generate new grid
let btnGenerate = document.querySelector(".btnGenerate")
btnGenerate.addEventListener("click", redoGrid)

// Function to generate new grid
function redoGrid(){
    let userInput
    while (isNaN(userInput) | userInput > 100 | userInput < 0) {
        userInput = parseInt(prompt("Generate up to 100 grids"), 10)       
    }





}

function createGrid(nrGrids){
    for (let r = 0; r <= nrGrids; r++) {
        className = `row`
        const divRow = document.createElement("div")
        divRow.classList.add(className)
        for (let c = 0; c <= nrGrids; c++) {
            className = `col`
            const divCol = document.createElement("div")
            divCol.addEventListener("mouseenter", function(){
                divCol.classList.add("colHover")
            })
            divCol.classList.add(className)
            divRow.appendChild(divCol)
        }
        container.appendChild(divRow)
    }
} 

createGrid(16)



