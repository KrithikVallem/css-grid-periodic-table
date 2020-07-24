import { elements } from './elements.js';

class elementContainer {
    constructor(name, number, symbol) {
        this.name = name;
        this.number = number;
        this.symbol = symbol;
    }

    makeElementDiv() {
        const innerHtml = 
        `
          <p>${this.number}</p>
          <br/>
          <strong>${this.symbol}</strong> 
        `;

        const div = document.createElement("div");
        div.classList.add("elementDiv");
        div.id = `element-${this.number}`;
        div.innerHTML = innerHtml;

        const tableContainer = document.querySelector("#tableContainer");
        tableContainer.appendChild(div);
    }
} 

for (const element of elements) {
    const container = new elementContainer(element.name, element.number, element.symbol);
    container.makeElementDiv();
}
