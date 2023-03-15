const currentValue = document.getElementById('currentValue');
const etchASketch = document.getElementById('etchASketch')
const range = document.getElementById('pixelRange');
const pencilMode = document.getElementById('pencilMode');
const rainbowMode = document.getElementById('rainbowMode');
const eraserMode = document.getElementById('eraserMode');
const clearMode = document.getElementById('clearMode');
document.body.style.backgroundColor = "#CCFFFF";
document.getElementById('text').style.color = '#8250C4';
etchASketch.style.cssText = `display: grid; grid-template-columns: repeat(${range.valueAsNumber}, 1fr); width: 640px; height: 640px; background-color: white;`;
currentValue.textContent = `${range.valueAsNumber} x ${range.valueAsNumber}`;
for (i = 0; i < (range.valueAsNumber * range.valueAsNumber); i++) {
    let gridItem = document.createElement('div');
    gridItem.setAttribute('id', 'gridItem');
    gridItem.setAttribute('class', 'gridItem');
    etchASketch.appendChild(gridItem);
    gridItem.style.cssText = 'border: 1px solid black';
}

range.addEventListener('mouseup', gridAdd);
function gridAdd(e) {
    range.addEventListener('change', () => {
        currentValue.textContent = `${range.valueAsNumber} x ${range.valueAsNumber}`;
    });
    let gridRemove = etchASketch.querySelectorAll('div');
    for (i = 0; i < gridRemove.length; i++) {
        gridRemove[i].remove();
    }
    etchASketch.style.cssText = `display: grid; grid-template-columns: repeat(${range.valueAsNumber}, 1fr); width: 640px; height: 640px; background-color: white;`;
    for (i = 0; i < (range.valueAsNumber * range.valueAsNumber); i++) {
        let gridItem = document.createElement('div');
        gridItem.setAttribute('id', 'gridItem');
        gridItem.setAttribute('class', 'gridItem');
        etchASketch.appendChild(gridItem);
        gridItem.style.cssText = 'border: 1px solid black';
    }
}

etchASketch.addEventListener('mouseover', blackColorIn);


function blackColorIn(e) {
    if (e.buttons == 1) {
        e.target.style.cssText = "background-color: black;";
      }
    }