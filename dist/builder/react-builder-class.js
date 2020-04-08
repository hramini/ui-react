"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class ReactBuilder {
    baseBuild(param) {
        const { name, properties, children } = param;
        this.childNodes = (children !== null && children !== void 0 ? children : []);
        this.element = react_1.createElement(name, properties, ...this.childNodes);
        return { element: this.element };
    }
}
exports.ReactBuilder = ReactBuilder;
