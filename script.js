const currentValue = document.getElementById('currentValue');
const etchASketch = document.getElementById('etchASketch')
const range = document.getElementById('pixelRange');
const clearMode = document.getElementById('clearMode');
const btnCol = document.getElementById('btnCol');
//GRIDVALUEDISPLAY
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
//CHANGINGGRIDVALUES
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
//BUTTONFUNCTIONS

btnCol.addEventListener('click', btnCommand);
function btnCommand(e) {
    let pencilMode = document.getElementById('pencilMode');
    let rainbowMode = document.getElementById('rainbowMode');
    let eraserMode = document.getElementById('eraserMode');
  if (e.target.classList.contains('pencil')) {
        e.target.setAttribute('id', 'pencilMode');
        if (rainbowMode !== null) {
            rainbowMode.removeAttribute('id');
        } else if (eraserMode !== null) {
            eraserMode.removeAttribute('id');
        }
  } else if (e.target.classList.contains('rainbow')) {
    e.target.setAttribute('id', 'rainbowMode');
        if (pencilMode !== null) {
            pencilMode.removeAttribute('id');   
        } else if (eraserMode !== null) {
            eraserMode.removeAttribute('id');
        }
  } else if (e.target.classList.contains('eraser')) {
        e.target.setAttribute('id', 'eraserMode');
        if (rainbowMode !== null) {
            rainbowMode.removeAttribute('id');
            
        } else if (pencilMode !== null) {
            pencilMode.removeAttribute('id');
            e.target.setAttribute('id', 'eraserMode');
        }
  } 
}
etchASketch.addEventListener('mouseover', (e) => {
    let pencilMode = document.getElementById('pencilMode');
    let rainbowMode = document.getElementById('rainbowMode');
    let eraserMode = document.getElementById('eraserMode');
    if (e.buttons == 1) {
        if (rainbowMode == null && eraserMode == null) {
             e.target.style.backgroundColor = 'black';
        } else if (pencilMode == null && rainbowMode == null) {
            e.target.style.backgroundColor = 'white';
        } else 
            e.target.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            
        }
    })
//CLEARMODEFUNCTION
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