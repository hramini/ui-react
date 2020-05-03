"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_wrapper_1 = require("ui-wrapper");
const react_unit_class_1 = require("../react-unit-class");
class ReactUnitTagDemo extends react_unit_class_1.ReactUnit {
    constructor() {
        super();
        this.lifeCycleText = '';
        const { tagBuilderInstance } = ui_wrapper_1.TagBuilder.getTagBuilder();
        this.lifeCycleText += 'C';
        this.builder = tagBuilderInstance;
        this.state = {};
    }
    onBeforeProvide() {
        this.lifeCycleText += 'Bp';
    }
    onAfterProvide() {
        this.lifeCycleText += 'Ap';
    }
    onBeforeUpdate() {
        this.lifeCycleText += 'Bu';
        return { shouldUpdate: true };
    }
    onAfterUpdate() {
        this.lifeCycleText += 'Au';
    }
    onBeforeDispose() {
        this.lifeCycleText += 'Bd';
    }
    provide() {
        const { props, builder } = this;
        this.lifeCycleText += 'P';
        const { element } = builder.buildElement({
            name: 'test-tag-element',
            properties: Object.assign({}, props)
        });
        return { element };
    }
}
exports.ReactUnitTagDemo = ReactUnitTagDemo;
