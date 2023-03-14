document.body.style.backgroundColor = "#CCFFFF"
const etchASketch = document.getElementById('etchASketch')
let range = document.getElementById('pixelRange');
etchASketch.style.cssText = `display: grid; grid-template-columns: repeat(${range.valueAsNumber}, 1fr); width: 640px; height: 640px; background-color: white;`;
let currentValue = document.getElementById('currentValue');
currentValue.textContent = `${range.valueAsNumber} x ${range.valueAsNumber}`;


let rangeChange = range.addEventListener('change', () => {
    currentValue.textContent = `${range.valueAsNumber} x ${range.valueAsNumber}`;
});

for (i = 0; i < (range.valueAsNumber * range.valueAsNumber); i++) {
    let gridItem = document.createElement('div');
    gridItem.setAttribute('id', `gridItem gridItem${i}`);
    etchASketch.appendChild(gridItem);
    gridItem.style.cssText = 'border: 1px solid black';
}


    

range.addEventListener('mouseup', gridAdd);

function gridAdd(e) {
    rangeChange;
    let gridRemove = etchASketch.querySelectorAll('div');
    for (var i = 0; i < gridRemove.length; i++) {
        gridRemove[i].remove();
    }
    etchASketch.style.cssText = `display: grid; grid-template-columns: repeat(${range.valueAsNumber}, 1fr); width: 640px; height: 640px; background-color: white;`;
    for (i = 0; i < (range.valueAsNumber * range.valueAsNumber); i++) {
        let gridItem = document.createElement('div');
        gridItem.setAttribute('id', `gridItem gridItem${i}`);
        etchASketch.appendChild(gridItem);
        gridItem.style.cssText = 'border: 1px solid black';
    }
}