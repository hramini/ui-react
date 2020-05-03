import { createElement } from 'react';
import { render } from 'react-dom';
import { FrameBuilder, TagBuilder } from 'ui-wrapper';
import { ElementTag, VirtualDocument } from 'virtual-document';
import { TReactElement } from '../../ui-react-type';
import { ReactUnitTagDemo } from '../../unit/tag/react-unit-tag-demo-class';
import {
  IReactUnitTagDemoProps,
  IReactUnitTagDemoStates
} from '../../unit/tag/react-unit-tag-demo-interface';
import { ReactTagBuilder } from '../tag/react-tag-builder-class';
import { ReactFrameBuilder } from './react-frame-builder-class';

describe('@ReactFrameBuilder', (): void => {
  let reactFrameBuilder: ReactFrameBuilder;
  beforeAll((): void => {
    reactFrameBuilder = new ReactFrameBuilder();
    TagBuilder.setTagBuilder({
      tagBuilderClass: ReactTagBuilder
    });
    FrameBuilder.setFrameBuilder({
      frameBuilderClass: ReactFrameBuilder
    });
  });

  describe('#buildElement', (): void => {
    const elementName: string = 'test-tag-element';
    const namePropertyValue: string = 'testName';
    const virtualDocument: VirtualDocument = new VirtualDocument();
    const { element: divElement } = virtualDocument.createNewElement({ tagName: ElementTag.DIV });
    test(`expects to build an element without properties and children to have ${elementName} as type and an empty object as props`, (): void => {
      const { element } = reactFrameBuilder.buildElement<
        IReactUnitTagDemoProps,
        IReactUnitTagDemoStates
      >({
        UnitConstructor: ReactUnitTagDemo,
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
      const { element } = reactFrameBuilder.buildElement<
        IReactUnitTagDemoProps,
        IReactUnitTagDemoStates
      >({
        UnitConstructor: ReactUnitTagDemo,
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
      const { element } = reactFrameBuilder.buildElement<
        IReactUnitTagDemoProps,
        IReactUnitTagDemoStates
      >({
        UnitConstructor: ReactUnitTagDemo,
        children: ['test-child'],
        properties: {}
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
      const { element } = reactFrameBuilder.buildElement<
        IReactUnitTagDemoProps,
        IReactUnitTagDemoStates
      >({
        UnitConstructor: ReactUnitTagDemo,
        children: ['test-child-1', 'test-child-2'],
        properties: {}
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
      const { element } = reactFrameBuilder.buildElement<
        IReactUnitTagDemoProps,
        IReactUnitTagDemoStates
      >({
        UnitConstructor: ReactUnitTagDemo,
        children: ['test-child-string', childElement],
        properties: {}
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
      const { element } = reactFrameBuilder.buildElement<
        IReactUnitTagDemoProps,
        IReactUnitTagDemoStates
      >({
        UnitConstructor: ReactUnitTagDemo,
        children: ['test-child'],
        properties: {
          name: namePropertyValue
        }
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
