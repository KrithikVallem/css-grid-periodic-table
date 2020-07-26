import { elements } from './elements.js';

class elementContainer {
    constructor(name, number, symbol, group) {
        this.name = name;
        this.number = number;
        this.symbol = symbol;
        this.group = group.replace(/ /g, "-");
    }

    makeElementDiv() {
        const div = document.createElement("div");
        div.classList.add("elementDiv");
        div.classList.add(this.group);
        div.id = this.symbol;
        div.textContent = this.symbol;

        const tableContainer = document.querySelector("#tableContainer");
        tableContainer.appendChild(div);
    }
} 

for (const element of elements) {
    const container = new elementContainer(element.name, element.number, element.symbol, element.category);
    container.makeElementDiv();
}
