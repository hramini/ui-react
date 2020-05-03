"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const ui_wrapper_1 = require("ui-wrapper");
const virtual_document_1 = require("virtual-document");
const react_unit_tag_demo_class_1 = require("../../unit/tag/react-unit-tag-demo-class");
const react_tag_builder_class_1 = require("../tag/react-tag-builder-class");
const react_frame_builder_class_1 = require("./react-frame-builder-class");
describe('@ReactFrameBuilder', () => {
    let reactFrameBuilder;
    beforeAll(() => {
        reactFrameBuilder = new react_frame_builder_class_1.ReactFrameBuilder();
        ui_wrapper_1.TagBuilder.setTagBuilder({
            tagBuilderClass: react_tag_builder_class_1.ReactTagBuilder
        });
        ui_wrapper_1.FrameBuilder.setFrameBuilder({
            frameBuilderClass: react_frame_builder_class_1.ReactFrameBuilder
        });
    });
    describe('#buildElement', () => {
        const elementName = 'test-tag-element';
        const namePropertyValue = 'testName';
        const virtualDocument = new virtual_document_1.VirtualDocument();
        const { element: divElement } = virtualDocument.createNewElement({ tagName: virtual_document_1.ElementTag.DIV });
        test(`expects to build an element without properties and children to have ${elementName} as type and an empty object as props`, () => {
            const { element } = reactFrameBuilder.buildElement({
                UnitConstructor: react_unit_tag_demo_class_1.ReactUnitTagDemo,
                properties: {}
            });
            const reactUnitTagDemo = react_dom_1.render(element, divElement);
            const { element: { type, props } } = reactUnitTagDemo.provide();
            expect(type).toBe(elementName);
            expect(props).toMatchObject({});
        });
        test(`expects to build an element with properties and without children to have ${elementName} as type and a name property equals to ${namePropertyValue} as props`, () => {
            const { element } = reactFrameBuilder.buildElement({
                UnitConstructor: react_unit_tag_demo_class_1.ReactUnitTagDemo,
                properties: {
                    name: namePropertyValue
                }
            });
            const reactUnitTagDemo = react_dom_1.render(element, divElement);
            const { element: { type, props: { name: nameProperty } } } = reactUnitTagDemo.provide();
            expect(type).toBe(elementName);
            expect(nameProperty).toBe(namePropertyValue);
        });
        test(`expects to build an element without properties and with single string children to have ${elementName} as type and an object with a string "children" property as props`, () => {
            const { element } = reactFrameBuilder.buildElement({
                UnitConstructor: react_unit_tag_demo_class_1.ReactUnitTagDemo,
                children: ['test-child'],
                properties: {}
            });
            const reactUnitTagDemo = react_dom_1.render(element, divElement);
            const { element: { type, props: { children: childrenProperty } } } = reactUnitTagDemo.provide();
            expect(type).toBe(elementName);
            expect(childrenProperty).toBe('test-child');
        });
        test(`expects to build an element without properties and with array of string children to have ${elementName} as type and an object with an array of string "children" property as props`, () => {
            const { element } = reactFrameBuilder.buildElement({
                UnitConstructor: react_unit_tag_demo_class_1.ReactUnitTagDemo,
                children: ['test-child-1', 'test-child-2'],
                properties: {}
            });
            const reactUnitTagDemo = react_dom_1.render(element, divElement);
            const { element: { type, props: { children: childrenProperty } } } = reactUnitTagDemo.provide();
            const [firstChildren, secondChildren] = childrenProperty;
            expect(type).toBe(elementName);
            expect(firstChildren).toBe('test-child-1');
            expect(secondChildren).toBe('test-child-2');
        });
        test(`expects to build an element without properties and with array of string and ReactElement children to have ${elementName} as type and an object with an array of string and ReactElement as "children" property`, () => {
            const childElement = react_1.createElement('test-child-element', {});
            const { element } = reactFrameBuilder.buildElement({
                UnitConstructor: react_unit_tag_demo_class_1.ReactUnitTagDemo,
                children: ['test-child-string', childElement],
                properties: {}
            });
            const reactUnitTagDemo = react_dom_1.render(element, divElement);
            const { element: { type, props: { children: childrenProperty } } } = reactUnitTagDemo.provide();
            const [stringChildren, { type: elementChildrenType }] = childrenProperty;
            expect(type).toBe(elementName);
            expect(stringChildren).toBe('test-child-string');
            expect(elementChildrenType).toBe('test-child-element');
        });
        test(`expects to build an element with both properties and children to have ${elementName} as type and an object with name and children as props`, () => {
            const { element } = reactFrameBuilder.buildElement({
                UnitConstructor: react_unit_tag_demo_class_1.ReactUnitTagDemo,
                children: ['test-child'],
                properties: {
                    name: namePropertyValue
                }
            });
            const reactUnitTagDemo = react_dom_1.render(element, divElement);
            const { element: { type, props: { name: nameProperty, children: childrenProperty } } } = reactUnitTagDemo.provide();
            expect(type).toBe(elementName);
            expect(nameProperty).toBe(namePropertyValue);
            expect(childrenProperty).toBe('test-child');
        });
    });
});
