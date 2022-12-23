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
}

