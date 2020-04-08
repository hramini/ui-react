"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_builder_class_1 = require("../react-builder-class");
class ReactFrameBuilder extends react_builder_class_1.ReactBuilder {
    buildElement(param) {
        const { name, properties, children } = param;
        const { element } = this.baseBuild({ name, properties, children });
        return { element };
    }
}
exports.ReactFrameBuilder = ReactFrameBuilder;
