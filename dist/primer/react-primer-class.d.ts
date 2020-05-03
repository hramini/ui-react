import { IPrimer, IPrimerElement, IPrimerTarget, IPrimerUnitPrototype, IUnit } from 'ui-wrapper';
import { TReactElement } from '../ui-react-type';
export declare class ReactPrimer implements IPrimer<TReactElement> {
    element: TReactElement;
    target: HTMLElement;
    readonly unitPrototype: IUnit<TReactElement, unknown, unknown>;
    constructor();
    getUnitPrototype(): IPrimerUnitPrototype<TReactElement>;
    setElement(param: IPrimerElement<TReactElement>): void;
    setTarget(param: IPrimerTarget): void;
    start(): void;
}
