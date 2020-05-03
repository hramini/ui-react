import { IElement } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';
import { IReactBuilderEntry } from './react-builder-interface';
export declare class ReactBuilder<P, S = never> {
    private readonly entry;
    constructor(entry: IReactBuilderEntry<P, S>);
    createElement(): IElement<TReactElement>;
}
