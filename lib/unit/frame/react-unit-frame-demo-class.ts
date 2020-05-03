/* eslint-disable @typescript-eslint/indent */
import { FrameBuilder, IElement, IFrameBuilder } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';
import { ReactUnit } from '../react-unit-class';
import { ReactUnitTagDemo } from '../tag/react-unit-tag-demo-class';
import {
  IReactUnitTagDemoProps,
  IReactUnitTagDemoStates
} from '../tag/react-unit-tag-demo-interface';
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

    const { frameBuilderInstance } = FrameBuilder.getFrameBuilder<TReactElement>();

    this.builder = frameBuilderInstance;
    this.state = {
      name: 'before-change'
    };
  }

  public provide(): IElement<TReactElement> {
    const { builder } = this;
    const { element } = builder.buildElement<IReactUnitTagDemoProps, IReactUnitTagDemoStates>({
      UnitConstructor: ReactUnitTagDemo,
      properties: {}
    });

    return { element };
  }
}
