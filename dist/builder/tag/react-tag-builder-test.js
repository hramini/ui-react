"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_tag_builder_class_1 = require("./react-tag-builder-class");
describe('@ReactTagBuilder', () => {
    let reactTagBuilder;
    beforeAll(() => {
        reactTagBuilder = new react_tag_builder_class_1.ReactTagBuilder();
    });
    describe('#buildElement', () => {
        const elementName = 'test-element';
        const nameProperty = 'testName';
        test(`expects to build an element without properties and children to have ${elementName} as type and an empty object as props`, () => {
            const { element: { type, props } } = reactTagBuilder.buildElement({
                name: elementName,
                properties: {}
            });
            expect(type).toBe(elementName);
            expect(props).toMatchObject({});
        });
        test(`expects to build an element with properties and without children to have ${elementName} as type and a name property equals to ${nameProperty} as props`, () => {
            const { element: { type, props } } = reactTagBuilder.buildElement({
                name: elementName,
                properties: {
                    name: nameProperty
                }
            });
            expect(type).toBe(elementName);
            expect(props).toMatchObject({ name: nameProperty });
        });
        test(`expects to build an element without properties and with single string children to have ${elementName} as type and an object with a string "children" property as props`, () => {
            const { element: { type, props } } = reactTagBuilder.buildElement({
                children: ['test-child'],
                name: elementName,
                properties: {}
            });
            expect(type).toBe(elementName);
            expect(props).toMatchObject({ children: 'test-child' });
        });
        test(`expects to build an element without properties and with array of string children to have ${elementName} as type and an object with an array of string "children" property as props`, () => {
            const { element: { type, props } } = reactTagBuilder.buildElement({
                children: ['test-child-1', 'test-child-2'],
                name: elementName,
                properties: {}
            });
            expect(type).toBe(elementName);
            expect(props).toMatchObject({ children: ['test-child-1', 'test-child-2'] });
        });
        test(`expects to build an element without properties and with array of string and ReactElement children to have ${elementName} as type and an object with an array of string and ReactElement as "children" property`, () => {
            const { element: childElement } = reactTagBuilder.buildElement({
                name: 'test-child-element',
                properties: {}
            });
            const { element: { type, props: { children } } } = reactTagBuilder.buildElement({
                children: ['test-child-string', childElement],
                name: elementName,
                properties: {}
            });
            const [stringChildren, { type: elementChildrenType }] = children;
            expect(type).toBe(elementName);
            expect(stringChildren).toBe('test-child-string');
            expect(elementChildrenType).toBe('test-child-element');
        });
        test(`expects to build an element with both properties and children to have ${elementName} as type and an object with name and children as props`, () => {
            const { element: { type, props: { name, children } } } = reactTagBuilder.buildElement({
                children: ['test-child'],
                name: elementName,
                properties: {
                    name: nameProperty
                }
            });
            expect(type).toBe(elementName);
            expect(name).toBe(nameProperty);
            expect(children).toBe('test-child');
        });
    });
});
