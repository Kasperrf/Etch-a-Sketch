let className = ""
let container = document.querySelector(".container")

for (let r = 1; r <= 16; r++) {
    className = `row`
    const divRow = document.createElement("div")
    divRow.classList.add(className)
    for (let c = 1; c <= 16; c++) {
        className = `col`
        const divCol = document.createElement("div")
        divCol.classList.add(className)
        divRow.appendChild(divCol)
    }
    container.appendChild(divRow)
}

