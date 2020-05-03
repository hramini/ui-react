import { ElementTag, VirtualDocument } from 'virtual-document';
import { ReactTagBuilder } from '../builder/tag/react-tag-builder-class';
import { ReactUnit } from '../unit/react-unit-class';
import { IReactUnitTagDemoProps } from '../unit/tag/react-unit-tag-demo-interface';
import { ReactPrimer } from './react-primer-class';

describe('@ReactPrimer', (): void => {
  let primer: ReactPrimer;
  let reactTagBuilder: ReactTagBuilder;
  let virtualDocument: VirtualDocument;

  beforeEach((): void => {
    primer = new ReactPrimer();
    reactTagBuilder = new ReactTagBuilder();
    virtualDocument = new VirtualDocument();
  });

  describe('#constructor', (): void => {
    test('expects to create an instance of @ReactPrimer', (): void => {
      expect(primer).toBeInstanceOf(ReactPrimer);
    });
  });

  describe('#getUnitPrototype', (): void => {
    test('expects the return value to be match with @ReactUnit prototype', (): void => {
      const { unitPrototype } = primer.getUnitPrototype();

      expect(unitPrototype).toMatchObject(ReactUnit.prototype);
    });
  });

  describe('#setElement', (): void => {
    const elementName: string = 'test-element';

    test('expects to set value to element property', (): void => {
      const { element } = reactTagBuilder.buildElement<IReactUnitTagDemoProps>({
        name: elementName,
        properties: {}
      });

      primer.setElement({ element });

      const { element: primerElement } = primer;
      const { type } = primerElement;

      expect(type).toBe(elementName);
    });
  });

  describe('#setTarget', (): void => {
    const elementTag: ElementTag = ElementTag.DIV;

    test('expects to set value to element property', (): void => {
      const { element } = virtualDocument.createNewElement({
        tagName: elementTag
      });

      primer.setTarget({ target: element });

      const {
        target: { tagName }
      } = primer;

      expect(tagName).toBe(elementTag);
    });
  });

  describe('#start', (): void => {
    const elementName: string = 'test-element';
    const elementTag: ElementTag = ElementTag.DIV;

    test('expects to set value to element property', (): void => {
      const { element } = reactTagBuilder.buildElement<IReactUnitTagDemoProps>({
        name: elementName,
        properties: {}
      });
      const { element: target } = virtualDocument.createNewElement({
        tagName: elementTag
      });

      primer.setElement({ element });
      primer.setTarget({ target });
      primer.start();

      const {
        elementCollection: {
          0: { tagName }
        }
      } = VirtualDocument.findElementsByTagName({
        element: target,
        tagName: 'test-element'
      });

      expect(tagName).toBe('test-element');
    });
  });
});
