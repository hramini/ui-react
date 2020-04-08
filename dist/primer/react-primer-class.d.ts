import { IPrimer, IPrimerElement, IPrimerTarget } from 'ui-wrapper';
import { TReactElement } from '../type/element-type';
export declare class ReactPrimer implements IPrimer<TReactElement> {
    element: TReactElement;
    target: HTMLElement;
    setElement(param: IPrimerElement<TReactElement>): void;
    setTarget(param: IPrimerTarget): void;
    start(): void;
}
