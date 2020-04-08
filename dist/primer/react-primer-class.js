"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = require("react-dom");
class ReactPrimer {
    setElement(param) {
        const { element } = param;
        this.element = element;
    }
    setTarget(param) {
        const { target } = param;
        this.target = target;
    }
    start() {
        const { element, target } = this;
        react_dom_1.render(element, target);
    }
}
exports.ReactPrimer = ReactPrimer;
