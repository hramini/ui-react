import { IElement } from 'ui-wrapper';
import { IReactElementOption } from '../type/element-option-interface';
import { TReactElement } from '../type/element-type';
export declare class ReactBuilder {
    private childNodes;
    private element;
    baseBuild<P, S>(param: IReactElementOption<P, S>): IElement<TReactElement>;
}
