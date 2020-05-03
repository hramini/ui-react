"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const ui_wrapper_1 = require("ui-wrapper");
const react_frame_builder_class_1 = require("../../builder/frame/react-frame-builder-class");
const react_tag_builder_class_1 = require("../../builder/tag/react-tag-builder-class");
const react_unit_frame_demo_class_1 = require("./react-unit-frame-demo-class");
describe('@ReactUnitFrame', () => {
    beforeAll(() => {
        ui_wrapper_1.FrameBuilder.setFrameBuilder({
            frameBuilderClass: react_frame_builder_class_1.ReactFrameBuilder
        });
        ui_wrapper_1.TagBuilder.setTagBuilder({
            tagBuilderClass: react_tag_builder_class_1.ReactTagBuilder
        });
    });
    describe('#provide', () => {
        const expectType = 'function';
        test(`expects to return an element with type value of type ${expectType}. It is testing by calling render method`, () => {
            const reactUnitFrameDemo = new react_unit_frame_demo_class_1.ReactUnitFrameDemo();
            const { type } = reactUnitFrameDemo.render();
            expect(typeof type).toBe(expectType);
        });
    });
    describe('#onBeforeProvide', () => {
        test('expects no modification in lifeCycleText', () => {
            const reactUnitFrameDemo = new react_unit_frame_demo_class_1.ReactUnitFrameDemo();
            reactUnitFrameDemo.onBeforeProvide();
            const { lifeCycleText } = reactUnitFrameDemo;
            expect(lifeCycleText).toBe('');
        });
    });
    describe('#onAfterProvide', () => {
        test('expects no modification in lifeCycleText', () => {
            const reactUnitFrameDemo = new react_unit_frame_demo_class_1.ReactUnitFrameDemo();
            reactUnitFrameDemo.onAfterProvide();
            const { lifeCycleText } = reactUnitFrameDemo;
            expect(lifeCycleText).toBe('');
        });
    });
    describe('#onBeforeUpdate', () => {
        test('expects shouldUpdate to be true', () => {
            const reactUnitFrameDemo = new react_unit_frame_demo_class_1.ReactUnitFrameDemo();
            const { shouldUpdate } = reactUnitFrameDemo.onBeforeUpdate();
            expect(shouldUpdate).toBeTruthy();
        });
    });
    describe('#onAfterUpdate', () => {
        test('expects no modification in lifeCycleText', () => {
            const reactUnitFrameDemo = new react_unit_frame_demo_class_1.ReactUnitFrameDemo();
            reactUnitFrameDemo.onAfterUpdate();
            const { lifeCycleText } = reactUnitFrameDemo;
            expect(lifeCycleText).toBe('');
        });
    });
    describe('#onBeforeDispose', () => {
        test('expects no modification in lifeCycleText', () => {
            const reactUnitFrameDemo = new react_unit_frame_demo_class_1.ReactUnitFrameDemo();
            reactUnitFrameDemo.onBeforeDispose();
            const { lifeCycleText } = reactUnitFrameDemo;
            expect(lifeCycleText).toBe('');
        });
    });
    describe('#alterState', () => {
        const stateName = 'test-text';
        test(`expects state.name to be changed to ${stateName}`, () => {
            const element = react_1.createElement(react_unit_frame_demo_class_1.ReactUnitFrameDemo);
            const div = document.createElement('div');
            const reactUnitFrameDemo = react_dom_1.render(element, div);
            reactUnitFrameDemo.alterState({
                state: {
                    name: stateName
                }
            });
            const { state: { name } } = reactUnitFrameDemo;
            expect(name).toBe(stateName);
        });
    });
});
