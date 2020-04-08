"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const ui_wrapper_1 = require("ui-wrapper");
const virtual_document_1 = require("virtual-document");
const react_tag_builder_class_1 = require("../../builder/tag/react-tag-builder-class");
const react_unit_tag_demo_class_1 = require("./react-unit-tag-demo-class");
describe('@ReactUnit', () => {
    beforeAll(() => {
        ui_wrapper_1.Builder.setTagBuilder({
            tagBuilderClass: react_tag_builder_class_1.ReactTagBuilder
        });
    });
    describe('#provide', () => {
        const elementType = 'test-tag-element';
        test(`expects element type to be ${elementType}`, () => {
            const reactUnitTagDemo = new react_unit_tag_demo_class_1.ReactUnitTagDemo();
            const { type } = reactUnitTagDemo.render();
            expect(type).toBe(elementType);
        });
    });
    describe('#componentDidMount', () => {
        const lifeCycleTextExpectation = 'CAp';
        test(`expects to modify lifeCycleText to ${lifeCycleTextExpectation}`, () => {
            const reactUnitTagDemo = new react_unit_tag_demo_class_1.ReactUnitTagDemo();
            reactUnitTagDemo.componentDidMount();
            const { lifeCycleText } = reactUnitTagDemo;
            expect(lifeCycleText).toBe(lifeCycleTextExpectation);
        });
    });
    describe('#shouldComponentUpdate', () => {
        const lifeCycleTextExpectation = 'CBu';
        test(`expects to modify lifeCycleText to ${lifeCycleTextExpectation}`, () => {
            const reactUnitTagDemo = new react_unit_tag_demo_class_1.ReactUnitTagDemo();
            const shouldUpdate = reactUnitTagDemo.shouldComponentUpdate();
            const { lifeCycleText } = reactUnitTagDemo;
            expect(shouldUpdate).toBeTruthy();
            expect(lifeCycleText).toBe(lifeCycleTextExpectation);
        });
    });
    describe('#componentDidUpdate', () => {
        const lifeCycleTextExpectation = 'CAu';
        test(`expects to modify lifeCycleText to ${lifeCycleTextExpectation}`, () => {
            const reactUnitTagDemo = new react_unit_tag_demo_class_1.ReactUnitTagDemo();
            reactUnitTagDemo.componentDidUpdate();
            const { lifeCycleText } = reactUnitTagDemo;
            expect(lifeCycleText).toBe(lifeCycleTextExpectation);
        });
    });
    describe('#componentWillUnmount', () => {
        const lifeCycleTextExpectation = 'CBd';
        test(`expects to modify lifeCycleText to ${lifeCycleTextExpectation}`, () => {
            const reactUnitTagDemo = new react_unit_tag_demo_class_1.ReactUnitTagDemo();
            reactUnitTagDemo.componentWillUnmount();
            const { lifeCycleText } = reactUnitTagDemo;
            expect(lifeCycleText).toBe(lifeCycleTextExpectation);
        });
    });
    describe('React Component Life Cycle', () => {
        const lifeCycleTextExpectation = 'CPAp';
        test('expects unit lifeCycleText to be ${} after running react mount lifeCycle', () => {
            const element = react_1.createElement(react_unit_tag_demo_class_1.ReactUnitTagDemo);
            const virtualDocument = new virtual_document_1.VirtualDocument();
            const { element: div } = virtualDocument.makeElement({ tagName: virtual_document_1.ElementTag.DIV });
            const reactUnitTagDemo = react_dom_1.render(element, div);
            const { lifeCycleText } = reactUnitTagDemo;
            expect(lifeCycleText).toBe(lifeCycleTextExpectation);
        });
    });
});
