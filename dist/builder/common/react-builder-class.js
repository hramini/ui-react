"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class ReactBuilder {
    constructor(entry) {
        this.entry = entry;
    }
    createElement() {
        const { entry } = this;
        const { element, properties, children } = entry;
        const childNodes = (children !== null && children !== void 0 ? children : []);
        const reactElement = react_1.createElement(element, properties, ...childNodes);
        return { element: reactElement };
    }
}
exports.ReactBuilder = ReactBuilder;
