document.body.style.backgroundColor = "#CCFFFF"
const etchASketch = document.getElementById('etchASketch')
etchASketch.style.cssText = 'display: grid; grid-template-columns: repeat(37, 1fr); grid-template-rows: repeat(37, 1fr); width: 480px; height: 480px;';


let currentValue = document.getElementById('currentValue');
let range = document.getElementById('pixelRange');
currentValue.textContent = `${range.valueAsNumber} x ${range.valueAsNumber}`;
range.addEventListener('change', () => {
    currentValue.textContent = `${range.valueAsNumber} x ${range.valueAsNumber}`;
});

for (i = 0; i < (range.valueAsNumber * range.valueAsNumber); i++) {
    
    let gridItem = document.createElement('div');
    gridItem.setAttribute('id', `gridItem${i}`);
    etchASketch.appendChild(gridItem);
    gridItem.style.cssText = 'border: 1px solid black; background-color: white;';

}

