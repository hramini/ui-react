import { createElement } from 'react';
import { render } from 'react-dom';
import { Builder } from 'ui-wrapper';
import { ElementTag, VirtualDocument } from 'virtual-document';
import { TReactElement } from '../../type/element-type';
import { ReactUnitTagDemo } from '../../unit/tag/react-unit-tag-demo-class';
import { ReactTagBuilder } from '../tag/react-tag-builder-class';
import { ReactFrameBuilder } from './react-frame-builder-class';

describe('@ReactFrameBuilder', (): void => {
  let reactFrameBuilder: ReactFrameBuilder;
  beforeAll((): void => {
    reactFrameBuilder = new ReactFrameBuilder();
    Builder.setTagBuilder({
      tagBuilderClass: ReactTagBuilder
    });
  });

  describe('#buildElement', (): void => {
    const elementName: string = 'test-tag-element';
    const namePropertyValue: string = 'testName';
    const virtualDocument: VirtualDocument = new VirtualDocument();
    const { element: divElement } = virtualDocument.makeElement({ tagName: ElementTag.DIV });
    test(`expects to build an element without properties and children to have ${elementName} as type and an empty object as props`, (): void => {
      const { element } = reactFrameBuilder.buildElement({
        name: ReactUnitTagDemo,
        properties: {}
      });
      const reactUnitTagDemo: ReactUnitTagDemo = render(element, divElement) as ReactUnitTagDemo;
      const {
        element: { type, props }
      } = reactUnitTagDemo.provide();

      expect(type).toBe(elementName);
      expect(props).toMatchObject({});
    });

    test(`expects to build an element with properties and without children to have ${elementName} as type and a name property equals to ${namePropertyValue} as props`, (): void => {
      const { element } = reactFrameBuilder.buildElement({
        name: ReactUnitTagDemo,
        properties: {
          name: namePropertyValue
        }
      });
      const reactUnitTagDemo: ReactUnitTagDemo = render(element, divElement) as ReactUnitTagDemo;
      const {
        element: {
          type,
          props: { name: nameProperty }
        }
      } = reactUnitTagDemo.provide();

      expect(type).toBe(elementName);
      expect(nameProperty).toBe(namePropertyValue);
    });

    test(`expects to build an element without properties and with single string children to have ${elementName} as type and an object with a string "children" property as props`, (): void => {
      const { element } = reactFrameBuilder.buildElement({
        name: ReactUnitTagDemo,
        properties: {},
        children: ['test-child']
      });
      const reactUnitTagDemo: ReactUnitTagDemo = render(element, divElement) as ReactUnitTagDemo;
      const {
        element: {
          type,
          props: { children: childrenProperty }
        }
      } = reactUnitTagDemo.provide();

      expect(type).toBe(elementName);
      expect(childrenProperty).toBe('test-child');
    });

    test(`expects to build an element without properties and with array of string children to have ${elementName} as type and an object with an array of string "children" property as props`, (): void => {
      const { element } = reactFrameBuilder.buildElement({
        name: ReactUnitTagDemo,
        properties: {},
        children: ['test-child-1', 'test-child-2']
      });
      const reactUnitTagDemo: ReactUnitTagDemo = render(element, divElement) as ReactUnitTagDemo;
      const {
        element: {
          type,
          props: { children: childrenProperty }
        }
      } = reactUnitTagDemo.provide();
      const [firstChildren, secondChildren] = childrenProperty;

      expect(type).toBe(elementName);
      expect(firstChildren).toBe('test-child-1');
      expect(secondChildren).toBe('test-child-2');
    });

    test(`expects to build an element without properties and with array of string and ReactElement children to have ${elementName} as type and an object with an array of string and ReactElement as "children" property`, (): void => {
      const childElement: TReactElement = createElement('test-child-element', {});
      const { element } = reactFrameBuilder.buildElement({
        name: ReactUnitTagDemo,
        properties: {},
        children: ['test-child-string', childElement]
      });
      const reactUnitTagDemo: ReactUnitTagDemo = render(element, divElement) as ReactUnitTagDemo;
      const {
        element: {
          type,
          props: { children: childrenProperty }
        }
      } = reactUnitTagDemo.provide();
      const [stringChildren, { type: elementChildrenType }] = childrenProperty;

      expect(type).toBe(elementName);
      expect(stringChildren).toBe('test-child-string');
      expect(elementChildrenType).toBe('test-child-element');
    });

    test(`expects to build an element with both properties and children to have ${elementName} as type and an object with name and children as props`, (): void => {
      const { element } = reactFrameBuilder.buildElement({
        name: ReactUnitTagDemo,
        properties: {
          name: namePropertyValue
        },
        children: ['test-child']
      });
      const reactUnitTagDemo: ReactUnitTagDemo = render(element, divElement) as ReactUnitTagDemo;
      const {
        element: {
          type,
          props: { name: nameProperty, children: childrenProperty }
        }
      } = reactUnitTagDemo.provide();

      expect(type).toBe(elementName);
      expect(nameProperty).toBe(namePropertyValue);
      expect(childrenProperty).toBe('test-child');
    });
  });
});
