import { createElement } from 'react';
import { render } from 'react-dom';
import { Builder } from 'ui-wrapper';
import { ElementTag, VirtualDocument } from 'virtual-document';
import { ReactTagBuilder } from '../../builder/tag/react-tag-builder-class';
import { TReactElement } from '../../type/element-type';
import { ReactUnitTagDemo } from './react-unit-tag-demo-class';

describe('@ReactUnit', (): void => {
  beforeAll((): void => {
    Builder.setTagBuilder({
      tagBuilderClass: ReactTagBuilder
    });
  });

  describe('#provide', (): void => {
    const elementType: string = 'test-tag-element';
    test(`expects element type to be ${elementType}`, (): void => {
      const reactUnitTagDemo: ReactUnitTagDemo = new ReactUnitTagDemo();
      const { type } = reactUnitTagDemo.render();

      expect(type).toBe(elementType);
    });
  });

  /*
   * describe('#componentWillMount', (): void => {
   *   const lifeCycleTextExpectation: string = 'CBp';
   *   test(`expects to modify lifeCycleText to ${lifeCycleTextExpectation}`, (): void => {
   *     const reactUnitTagDemo: ReactUnitTagDemo = new ReactUnitTagDemo();
   *     // eslint-disable-next-line new-cap
   *     reactUnitTagDemo.UNSAFE_componentWillMount();
   *     const { lifeCycleText } = reactUnitTagDemo;
   */

  /*
   *     expect(lifeCycleText).toBe(lifeCycleTextExpectation);
   *   });
   * });
   */

  describe('#componentDidMount', (): void => {
    const lifeCycleTextExpectation: string = 'CAp';
    test(`expects to modify lifeCycleText to ${lifeCycleTextExpectation}`, (): void => {
      const reactUnitTagDemo: ReactUnitTagDemo = new ReactUnitTagDemo();
      reactUnitTagDemo.componentDidMount();
      const { lifeCycleText } = reactUnitTagDemo;

      expect(lifeCycleText).toBe(lifeCycleTextExpectation);
    });
  });

  describe('#shouldComponentUpdate', (): void => {
    const lifeCycleTextExpectation: string = 'CBu';
    test(`expects to modify lifeCycleText to ${lifeCycleTextExpectation}`, (): void => {
      const reactUnitTagDemo: ReactUnitTagDemo = new ReactUnitTagDemo();
      const shouldUpdate: boolean = reactUnitTagDemo.shouldComponentUpdate();
      const { lifeCycleText } = reactUnitTagDemo;

      expect(shouldUpdate).toBeTruthy();
      expect(lifeCycleText).toBe(lifeCycleTextExpectation);
    });
  });

  describe('#componentDidUpdate', (): void => {
    const lifeCycleTextExpectation: string = 'CAu';
    test(`expects to modify lifeCycleText to ${lifeCycleTextExpectation}`, (): void => {
      const reactUnitTagDemo: ReactUnitTagDemo = new ReactUnitTagDemo();
      reactUnitTagDemo.componentDidUpdate();
      const { lifeCycleText } = reactUnitTagDemo;

      expect(lifeCycleText).toBe(lifeCycleTextExpectation);
    });
  });

  describe('#componentWillUnmount', (): void => {
    const lifeCycleTextExpectation: string = 'CBd';
    test(`expects to modify lifeCycleText to ${lifeCycleTextExpectation}`, (): void => {
      const reactUnitTagDemo: ReactUnitTagDemo = new ReactUnitTagDemo();
      reactUnitTagDemo.componentWillUnmount();
      const { lifeCycleText } = reactUnitTagDemo;

      expect(lifeCycleText).toBe(lifeCycleTextExpectation);
    });
  });

  describe('React Component Life Cycle', (): void => {
    const lifeCycleTextExpectation: string = 'CPAp';
    test('expects unit lifeCycleText to be ${} after running react mount lifeCycle', (): void => {
      const element: TReactElement = createElement(ReactUnitTagDemo);
      const virtualDocument: VirtualDocument = new VirtualDocument();
      const { element: div } = virtualDocument.makeElement({ tagName: ElementTag.DIV });
      const reactUnitTagDemo: ReactUnitTagDemo = render(element, div) as ReactUnitTagDemo;
      const { lifeCycleText } = reactUnitTagDemo;

      expect(lifeCycleText).toBe(lifeCycleTextExpectation);
    });
  });
});
