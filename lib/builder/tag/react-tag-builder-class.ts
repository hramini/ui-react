import { IElement, ITagBuilder } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';
import { ReactBuilder } from '../common/react-builder-class';
import { IReactTagElementOption } from './react-tag-builder-interface';

export class ReactTagBuilder implements ITagBuilder<TReactElement> {
  // TODO: write a new rule for eslint to handle this situations
  // eslint-disable-next-line class-methods-use-this
  public buildElement<P = never, RequiredP extends P = P>(
    param: IReactTagElementOption<RequiredP>
  ): IElement<TReactElement> {
    const { name, properties, children } = param;
    const reactBuilder: ReactBuilder<RequiredP> = new ReactBuilder<RequiredP>({
      children,
      element: name,
      properties
    });
    const { element } = reactBuilder.createElement();

    return { element };
  }
}
