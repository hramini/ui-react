import { IElement, IFrameBuilder } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';
import { IReactFrameElementOption } from './react-frame-builder-interface';
export declare class ReactFrameBuilder implements IFrameBuilder<TReactElement> {
    buildElement<P = never, S = never, RequiredP extends P = P, RequiredS extends S = S>(param: IReactFrameElementOption<RequiredP, RequiredS>): IElement<TReactElement>;
}
