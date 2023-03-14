document.body.style.backgroundColor = "#CCFFFF"
const etchASketch = document.getElementById('etchASketch')
etchASketch.style.cssText = 'display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr); width: 480px; height: 480px;';

for (i = 0; i < 256; i++) {
    let gridItem = document.createElement('div');
    gridItem.setAttribute('id', `gridItem${i}`);
    etchASketch.appendChild(gridItem);
    gridItem.style.cssText = 'border: 1px solid black; background-color: white;'
    
}


