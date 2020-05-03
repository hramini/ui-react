import { IElement, IFrameBuilder } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';
import { ReactBuilder } from '../common/react-builder-class';
import { IReactFrameElementOption } from './react-frame-builder-interface';

export class ReactFrameBuilder implements IFrameBuilder<TReactElement> {
  // TODO: write a new rule for eslint to handle this situations
  // eslint-disable-next-line class-methods-use-this
  public buildElement<P = never, S = never, RequiredP extends P = P, RequiredS extends S = S>(
    param: IReactFrameElementOption<RequiredP, RequiredS>
  ): IElement<TReactElement> {
    const { UnitConstructor, properties, children } = param;
    const reactBuilder: ReactBuilder<RequiredP, RequiredS> = new ReactBuilder<RequiredP, RequiredS>(
      { children, element: UnitConstructor, properties }
    );
    const { element } = reactBuilder.createElement();

    return { element };
  }
}
