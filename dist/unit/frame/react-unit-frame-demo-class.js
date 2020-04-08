"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_wrapper_1 = require("ui-wrapper");
const react_unit_class_1 = require("../react-unit-class");
const react_unit_tag_demo_class_1 = require("../tag/react-unit-tag-demo-class");
class ReactUnitFrameDemo extends react_unit_class_1.ReactUnit {
    constructor() {
        super();
        this.lifeCycleText = '';
        const { frameBuilderInstance } = ui_wrapper_1.Builder.getFrameBuilder();
        this.builder = frameBuilderInstance;
        this.state = {
            name: 'before-change'
        };
    }
    provide() {
        const { element } = this.builder.buildElement({
            name: react_unit_tag_demo_class_1.ReactUnitTagDemo,
            properties: {}
        });
        return { element };
    }
}
exports.ReactUnitFrameDemo = ReactUnitFrameDemo;
