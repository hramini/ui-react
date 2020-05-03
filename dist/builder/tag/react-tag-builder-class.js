"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_builder_class_1 = require("../common/react-builder-class");
class ReactTagBuilder {
    buildElement(param) {
        const { name, properties, children } = param;
        const reactBuilder = new react_builder_class_1.ReactBuilder({
            children,
            element: name,
            properties
        });
        const { element } = reactBuilder.createElement();
        return { element };
    }
}
exports.ReactTagBuilder = ReactTagBuilder;
