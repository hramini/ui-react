"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = require("react-dom");
const ui_wrapper_1 = require("ui-wrapper");
const react_unit_class_1 = require("../unit/react-unit-class");
class ReactPrimer {
    constructor() {
        Object.setPrototypeOf(ui_wrapper_1.Unit.prototype, react_unit_class_1.ReactUnit.prototype);
    }
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
