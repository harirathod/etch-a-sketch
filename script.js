let container = document.querySelector('#grid-container');
createGrid(32);
function createGrid(n) 
{
    let width = container.clientWidth / n;
    container.setAttribute(`style`, `display: grid; grid-template-rows: repeat(${n}, ${width}px);`)
    for(let i = 0; i < n; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('style', `display: grid; grid-template-columns: repeat(${n}, ${width}px);`)
        for(let j = 0; j < n; j++) {
            let singleDiv = document.createElement('div');
            rowDiv.appendChild(singleDiv);
        }
        container.appendChild(rowDiv);
    }
    getGridBoxes().forEach(div => div.addEventListener('mouseover', function(e) {
        e.target.classList.add('coloured');
    }));
}

function reset()
{
    let rows = document.querySelectorAll('#grid-container > div');
    rows.forEach(row => row.remove());
}

let resetBtn = document.querySelector('#change-grid');
resetBtn.addEventListener('click', function(e) {
    let squaresPerSide = 32;
    squaresPerSide = prompt('Enter a valid number for the squares per side of the new grid.', "32");
    while(squaresPerSide > 100 || squaresPerSide < 5) {
        squaresPerSide = prompt('Your number was not in the valid range (5 - 100). Please enter a valid number.', "32");
    }
    reset();
    createGrid(squaresPerSide);
})

let multicolouredBtn = document.querySelector('#multicoloured');
multicolouredBtn.addEventListener('click', function(e) {
    getGridBoxes().forEach(div => div.classList.add('multicoloured'));
})

function getGridBoxes()
{
    let divs = document.querySelectorAll('#grid-container > div > div');
    return divs;
}

