"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_builder_class_1 = require("../common/react-builder-class");
class ReactFrameBuilder {
    buildElement(param) {
        const { UnitConstructor, properties, children } = param;
        const reactBuilder = new react_builder_class_1.ReactBuilder({ children, element: UnitConstructor, properties });
        const { element } = reactBuilder.createElement();
        return { element };
    }
}
exports.ReactFrameBuilder = ReactFrameBuilder;
