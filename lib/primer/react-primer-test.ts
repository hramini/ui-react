import { ElementTag, VirtualDocument } from 'virtual-document';
import { ReactTagBuilder } from '../builder/tag/react-tag-builder-class';
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

  describe('#setElement', (): void => {
    const elementName: string = 'test-element';
    test('expects to set value to element property', (): void => {
      const { element } = reactTagBuilder.buildElement({
        name: elementName,
        properties: {}
      });
      primer.setElement({ element });
      const {
        element: { type }
      } = primer;

      expect(type).toBe(elementName);
    });
  });

  describe('#setTarget', (): void => {
    const elementTag: ElementTag = ElementTag.DIV;
    test('expects to set value to element property', (): void => {
      const { element } = virtualDocument.makeElement({
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
      const {
        elementCollection: {
          0: { tagName }
        }
      } = VirtualDocument.findElementsByTagName({
        source: target,
        tagName: 'test-element'
      });

      expect(tagName).toBe('test-element');
    });
  });
});
