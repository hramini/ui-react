import { IElement, ITagBuilder } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';
import { IReactTagElementOption } from './react-tag-builder-interface';
export declare class ReactTagBuilder implements ITagBuilder<TReactElement> {
    buildElement<P = never, RequiredP extends P = P>(param: IReactTagElementOption<RequiredP>): IElement<TReactElement>;
}
