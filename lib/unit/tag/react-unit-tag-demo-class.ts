import { IElement, ITagBuilder, IUnitOnBeforeUpdateCheck, TagBuilder } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';
import { ReactUnit } from '../react-unit-class';
import { IReactUnitTagDemoProps, IReactUnitTagDemoStates } from './react-unit-tag-demo-interface';

export class ReactUnitTagDemo extends ReactUnit<IReactUnitTagDemoProps, IReactUnitTagDemoStates> {
  public lifeCycleText: string = '';
  private readonly builder: ITagBuilder<TReactElement>;

  public constructor() {
    super();

    const { tagBuilderInstance } = TagBuilder.getTagBuilder<TReactElement>();

    this.lifeCycleText += 'C';
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
    const { props, builder } = this;
    this.lifeCycleText += 'P';

    const { element } = builder.buildElement<IReactUnitTagDemoProps>({
      name: 'test-tag-element',
      properties: { ...props }
    });

    return { element };
  }
}
