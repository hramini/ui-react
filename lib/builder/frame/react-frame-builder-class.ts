import { IElement, IFrameBuilder } from 'ui-wrapper';
import { IReactFrameElementOption } from '../../type/element-option-interface';
import { TReactElement } from '../../type/element-type';
import { ReactBuilder } from '../react-builder-class';

export class ReactFrameBuilder extends ReactBuilder implements IFrameBuilder<TReactElement> {
  public buildElement<P, S>(param: IReactFrameElementOption<P, S>): IElement<TReactElement> {
    const { name, properties, children } = param;
    const { element } = this.baseBuild({ name, properties, children });

    return { element };
  }
}
