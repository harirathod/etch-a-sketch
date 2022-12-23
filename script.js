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
    setAllGrey();
}

function reset()
{
    let rows = document.querySelectorAll('#grid-container > div');
    rows.forEach(row => row.remove());
}

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function(e) {
    getGridBoxes().forEach(div => div.style.backgroundColor = 'transparent');
});

let changeGridBtn = document.querySelector('#new-grid');
changeGridBtn.addEventListener('click', function(e) {
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
    setAllMulticoloured();
})
let normalBtn = document.querySelector('#normal');
normalBtn.addEventListener('click', function(e) {
    setAllGrey();
})

function setAllGrey()
{
    getGridBoxes().forEach(div => div.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'grey';
    }));
}

function setAllMulticoloured()
{
    getGridBoxes().forEach(div => div.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = randomColour();
    }));
}

function randomColour()
{
    let colours = ['lightgreen', 'lightseagreen', 'lightcoral', 'lightsalmon'];
    return colours[Math.floor(Math.random() * colours.length)];
}

function getGridBoxes()
{
    let divs = document.querySelectorAll('#grid-container > div > div');
    return divs;
}

