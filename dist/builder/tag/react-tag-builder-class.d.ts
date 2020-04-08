import { IElement, ITagBuilder } from 'ui-wrapper';
import { IReactTagElementOption } from '../../type/element-option-interface';
import { TReactElement } from '../../type/element-type';
import { ReactBuilder } from '../react-builder-class';
export declare class ReactTagBuilder extends ReactBuilder implements ITagBuilder<TReactElement> {
    buildElement<P, S>(param: IReactTagElementOption<P, S>): IElement<TReactElement>;
}
