import { createElement } from 'react';
import { render } from 'react-dom';
import { FrameBuilder, TagBuilder } from 'ui-wrapper';
import { ReactFrameBuilder } from '../../builder/frame/react-frame-builder-class';
import { ReactTagBuilder } from '../../builder/tag/react-tag-builder-class';
import { TReactElement } from '../../ui-react-type';
import { ReactUnitFrameDemo } from './react-unit-frame-demo-class';

describe('@ReactUnitFrame', (): void => {
  beforeAll((): void => {
    FrameBuilder.setFrameBuilder({
      frameBuilderClass: ReactFrameBuilder
    });
    TagBuilder.setTagBuilder({
      tagBuilderClass: ReactTagBuilder
    });
  });

  describe('#provide', (): void => {
    const expectType: string = 'function';

    test(`expects to return an element with type value of type ${expectType}. It is testing by calling render method`, (): void => {
      const reactUnitFrameDemo: ReactUnitFrameDemo = new ReactUnitFrameDemo();
      const { type } = reactUnitFrameDemo.render();

      expect(typeof type).toBe(expectType);
    });
  });

  describe('#onBeforeProvide', (): void => {
    test('expects no modification in lifeCycleText', (): void => {
      const reactUnitFrameDemo: ReactUnitFrameDemo = new ReactUnitFrameDemo();

      reactUnitFrameDemo.onBeforeProvide();

      const { lifeCycleText } = reactUnitFrameDemo;

      expect(lifeCycleText).toBe('');
    });
  });

  describe('#onAfterProvide', (): void => {
    test('expects no modification in lifeCycleText', (): void => {
      const reactUnitFrameDemo: ReactUnitFrameDemo = new ReactUnitFrameDemo();

      reactUnitFrameDemo.onAfterProvide();

      const { lifeCycleText } = reactUnitFrameDemo;

      expect(lifeCycleText).toBe('');
    });
  });

  describe('#onBeforeUpdate', (): void => {
    test('expects shouldUpdate to be true', (): void => {
      const reactUnitFrameDemo: ReactUnitFrameDemo = new ReactUnitFrameDemo();
      const { shouldUpdate } = reactUnitFrameDemo.onBeforeUpdate();

      expect(shouldUpdate).toBeTruthy();
    });
  });

  describe('#onAfterUpdate', (): void => {
    test('expects no modification in lifeCycleText', (): void => {
      const reactUnitFrameDemo: ReactUnitFrameDemo = new ReactUnitFrameDemo();

      reactUnitFrameDemo.onAfterUpdate();

      const { lifeCycleText } = reactUnitFrameDemo;

      expect(lifeCycleText).toBe('');
    });
  });

  describe('#onBeforeDispose', (): void => {
    test('expects no modification in lifeCycleText', (): void => {
      const reactUnitFrameDemo: ReactUnitFrameDemo = new ReactUnitFrameDemo();

      reactUnitFrameDemo.onBeforeDispose();

      const { lifeCycleText } = reactUnitFrameDemo;

      expect(lifeCycleText).toBe('');
    });
  });

  describe('#alterState', (): void => {
    const stateName: string = 'test-text';

    test(`expects state.name to be changed to ${stateName}`, (): void => {
      const element: TReactElement = createElement(ReactUnitFrameDemo);
      const div: HTMLElement = document.createElement('div');
      const reactUnitFrameDemo: ReactUnitFrameDemo = render(element, div) as ReactUnitFrameDemo;

      reactUnitFrameDemo.alterState({
        state: {
          name: stateName
        }
      });

      const {
        state: { name }
      } = reactUnitFrameDemo;

      expect(name).toBe(stateName);
    });
  });
});
