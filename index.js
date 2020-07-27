import { elements } from './elements.js';

class elementContainer {
    constructor(name, number, symbol, group) {
        this.name = name;
        this.number = number;
        this.symbol = symbol;
        // regex removes spaces and replaces them with dashes to make valid css class
        this.group = group.startsWith("unknown") ? "unknown" : group.replace(/ /g, "-");
    }

    makeElementDiv() {
        const div = document.createElement("div");
        div.classList.add("elementDiv");
        div.classList.add(this.group);
        div.id = this.symbol;

        const number = document.createElement("div");
        number.classList.add("element-number");
        number.textContent = this.number;

        const symbol = document.createElement("div");
        symbol.classList.add("element-symbol");
        symbol.textContent = this.symbol;

        const name = document.createElement("div");
        name.classList.add("element-name");
        name.textContent = this.name;

        div.appendChild(number);
        div.appendChild(symbol);
        div.appendChild(name);

        const tableContainer = document.querySelector("#tableContainer");
        tableContainer.appendChild(div);
    }
} 

for (const element of elements) {
    const container = new elementContainer(element.name, element.number, element.symbol, element.category);
    container.makeElementDiv();
}
