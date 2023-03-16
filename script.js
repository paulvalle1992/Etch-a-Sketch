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
    gridItem.style.cssText = 'border: 1px solid #400000;';
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
        gridItem.style.cssText = 'border: 1px solid #400000;';
    }
}

const pencil = etchASketch.addEventListener('mouseover', (e) => {
    if (e.buttons == 1) {
        e.target.style.backgroundColor = 'black';
    }
})

const eraser = etchASketch.addEventListener('mouseover', (e) => {
    if (e.buttons == 1) {
        e.target.style.backgroundColor = 'white';
    }
})

const rainbow = etchASketch.addEventListener('mouseover', (e) => {
    if (e.buttons == 1) {
        e.target.style.backgroundColor = 'black';
    }
})

clearMode.addEventListener('click', toggleClear);
function toggleClear() {
    let borders = etchASketch.querySelectorAll('div'); 
    let x = document.getElementById('gridItem');
    if (x.style.border === '') {
        for (i = 0; i < borders.length; i++)
       borders[i].style.border = '1px solid #400000';
    } else {
        for (i = 0; i < borders.length; i++) {
            borders[i].style.removeProperty('border');
        }
    }
}
