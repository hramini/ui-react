"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const virtual_document_1 = require("virtual-document");
const react_tag_builder_class_1 = require("../builder/tag/react-tag-builder-class");
const react_primer_class_1 = require("./react-primer-class");
describe('@ReactPrimer', () => {
    let primer;
    let reactTagBuilder;
    let virtualDocument;
    beforeEach(() => {
        primer = new react_primer_class_1.ReactPrimer();
        reactTagBuilder = new react_tag_builder_class_1.ReactTagBuilder();
        virtualDocument = new virtual_document_1.VirtualDocument();
    });
    describe('#constructor', () => {
        test('expects to create an instance of @ReactPrimer', () => {
            expect(primer).toBeInstanceOf(react_primer_class_1.ReactPrimer);
        });
    });
    describe('#setElement', () => {
        const elementName = 'test-element';
        test('expects to set value to element property', () => {
            const { element } = reactTagBuilder.buildElement({
                name: elementName,
                properties: {}
            });
            primer.setElement({ element });
            const { element: { type } } = primer;
            expect(type).toBe(elementName);
        });
    });
    describe('#setTarget', () => {
        const elementTag = virtual_document_1.ElementTag.DIV;
        test('expects to set value to element property', () => {
            const { element } = virtualDocument.makeElement({
                tagName: elementTag
            });
            primer.setTarget({ target: element });
            const { target: { tagName } } = primer;
            expect(tagName).toBe(elementTag);
        });
    });
    describe('#start', () => {
        const elementName = 'test-element';
        const elementTag = virtual_document_1.ElementTag.DIV;
        test('expects to set value to element property', () => {
            const { element } = reactTagBuilder.buildElement({
                name: elementName,
                properties: {}
            });
            const { element: target } = virtualDocument.makeElement({
                tagName: elementTag
            });
            primer.setElement({ element });
            primer.setTarget({ target });
            primer.start();
            const { elementCollection: { 0: { tagName } } } = virtual_document_1.VirtualDocument.findElementsByTagName({
                source: target,
                tagName: 'test-element'
            });
            expect(tagName).toBe('test-element');
        });
    });
});
