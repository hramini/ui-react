import { ReactTagBuilder } from './react-tag-builder-class';

describe('@ReactTagBuilder', (): void => {
  let reactTagBuilder: ReactTagBuilder;
  beforeAll((): void => {
    reactTagBuilder = new ReactTagBuilder();
  });

  describe('#buildElement', (): void => {
    const elementName: string = 'test-element';
    const nameProperty: string = 'testName';
    test(`expects to build an element without properties and children to have ${elementName} as type and an empty object as props`, (): void => {
      const {
        element: { type, props }
      } = reactTagBuilder.buildElement({
        name: elementName,
        properties: {},
        children: []
      });

      expect(type).toBe(elementName);
      expect(props).toMatchObject({});
    });

    test(`expects to build an element with properties and without children to have ${elementName} as type and a name property equals to ${nameProperty} as props`, (): void => {
      const {
        element: { type, props }
      } = reactTagBuilder.buildElement({
        name: elementName,
        properties: {
          name: nameProperty
        },
        children: []
      });

      expect(type).toBe(elementName);
      expect(props).toMatchObject({ name: nameProperty });
    });

    test(`expects to build an element without properties and with single string children to have ${elementName} as type and an object with a string "children" property as props`, (): void => {
      const {
        element: { type, props }
      } = reactTagBuilder.buildElement({
        name: elementName,
        properties: {},
        children: ['test-child']
      });

      expect(type).toBe(elementName);
      expect(props).toMatchObject({ children: 'test-child' });
    });

    test(`expects to build an element without properties and with array of string children to have ${elementName} as type and an object with an array of string "children" property as props`, (): void => {
      const {
        element: { type, props }
      } = reactTagBuilder.buildElement({
        name: elementName,
        properties: {},
        children: ['test-child-1', 'test-child-2']
      });

      expect(type).toBe(elementName);
      expect(props).toMatchObject({ children: ['test-child-1', 'test-child-2'] });
    });

    test(`expects to build an element without properties and with array of string and ReactElement children to have ${elementName} as type and an object with an array of string and ReactElement as "children" property`, (): void => {
      const { element: childElement } = reactTagBuilder.buildElement({
        name: 'test-child-element',
        properties: {}
      });
      const {
        element: {
          type,
          props: { children }
        }
      } = reactTagBuilder.buildElement({
        name: elementName,
        properties: {},
        children: ['test-child-string', childElement]
      });
      const [stringChildren, { type: elementChildrenType }] = children;

      expect(type).toBe(elementName);
      expect(stringChildren).toBe('test-child-string');
      expect(elementChildrenType).toBe('test-child-element');
    });

    test(`expects to build an element with both properties and children to have ${elementName} as type and an object with name and children as props`, (): void => {
      const {
        element: {
          type,
          props: { name, children }
        }
      } = reactTagBuilder.buildElement({
        name: elementName,
        properties: {
          name: nameProperty
        },
        children: ['test-child']
      });

      expect(type).toBe(elementName);
      expect(name).toBe(nameProperty);
      expect(children).toBe('test-child');
    });
  });
});
