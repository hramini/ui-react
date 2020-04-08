import { IElement, ITagBuilder } from 'ui-wrapper';
import { IReactTagElementOption } from '../../type/element-option-interface';
import { TReactElement } from '../../type/element-type';
import { ReactBuilder } from '../react-builder-class';

export class ReactTagBuilder extends ReactBuilder implements ITagBuilder<TReactElement> {
  public buildElement<P, S>(param: IReactTagElementOption<P, S>): IElement<TReactElement> {
    const { name, properties, children } = param;
    const { element } = this.baseBuild({ name, properties, children });

    return { element };
  }
}
