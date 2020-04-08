"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ui_wrapper_1 = require("ui-wrapper");
const react_unit_class_1 = require("../react-unit-class");
class ReactUnitTagDemo extends react_unit_class_1.ReactUnit {
    constructor() {
        super();
        this.lifeCycleText = '';
        this.lifeCycleText += 'C';
        const { tagBuilderInstance } = ui_wrapper_1.Builder.getTagBuilder();
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
        this.lifeCycleText += 'P';
        const { element } = this.builder.buildElement({
            name: 'test-tag-element',
            properties: Object.assign({}, this.props)
        });
        return { element };
    }
}
exports.ReactUnitTagDemo = ReactUnitTagDemo;
