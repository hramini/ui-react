/* eslint-disable @typescript-eslint/indent */
import { Builder, IElement, IFrameBuilder } from 'ui-wrapper';
import { TReactElement } from '../../type/element-type';
import { ReactUnit } from '../react-unit-class';
import { ReactUnitTagDemo } from '../tag/react-unit-tag-demo-class';
import {
  IReactUnitFrameDemoProps,
  IReactUnitFrameDemoStates
} from './react-unit-frame-demo-interface';

export class ReactUnitFrameDemo extends ReactUnit<
  IReactUnitFrameDemoProps,
  IReactUnitFrameDemoStates
> {
  public lifeCycleText: string = '';
  private readonly builder: IFrameBuilder<TReactElement>;

  public constructor() {
    super();
    const { frameBuilderInstance } = Builder.getFrameBuilder<TReactElement>();
    this.builder = frameBuilderInstance;
    this.state = {
      name: 'before-change'
    };
  }

  public provide(): IElement<TReactElement> {
    const { element } = this.builder.buildElement({
      name: ReactUnitTagDemo,
      properties: {}
    });

    return { element };
  }
}
