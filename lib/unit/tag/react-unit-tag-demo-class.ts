import { Builder, IElement, ITagBuilder, IUnitOnBeforeUpdateCheck } from 'ui-wrapper';
import { TReactElement } from '../../type/element-type';
import { ReactUnit } from '../react-unit-class';
import { IReactUnitTagDemoProps, IReactUnitTagDemoStates } from './react-unit-tag-demo-interface';

export class ReactUnitTagDemo extends ReactUnit<IReactUnitTagDemoProps, IReactUnitTagDemoStates> {
  public lifeCycleText: string = '';
  private readonly builder: ITagBuilder<TReactElement>;

  public constructor() {
    super();
    this.lifeCycleText += 'C';
    const { tagBuilderInstance } = Builder.getTagBuilder<TReactElement>();
    this.builder = tagBuilderInstance;
    this.state = {};
  }

  public onBeforeProvide(): void {
    this.lifeCycleText += 'Bp';
  }

  public onAfterProvide(): void {
    this.lifeCycleText += 'Ap';
  }

  public onBeforeUpdate(): IUnitOnBeforeUpdateCheck {
    this.lifeCycleText += 'Bu';

    return { shouldUpdate: true };
  }

  public onAfterUpdate(): void {
    this.lifeCycleText += 'Au';
  }

  public onBeforeDispose(): void {
    this.lifeCycleText += 'Bd';
  }

  public provide(): IElement<TReactElement> {
    this.lifeCycleText += 'P';
    const { element } = this.builder.buildElement({
      name: 'test-tag-element',
      properties: { ...this.props }
    });

    return { element };
  }
}
