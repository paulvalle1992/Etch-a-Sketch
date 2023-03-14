document.body.style.backgroundColor = "#CCFFFF"
const etchASketch = document.getElementById('etchASketch')
let range = document.getElementById('pixelRange');
etchASketch.style.cssText = 'display: grid; grid-template-columns: repeat(16, 1fr); width: 480px; height: 480px;';


let currentValue = document.getElementById('currentValue');
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

