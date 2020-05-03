import { render } from 'react-dom';
import { IPrimer, IPrimerElement, IPrimerTarget, IPrimerUnitPrototype, IUnit } from 'ui-wrapper';
import { TReactElement } from '../ui-react-type';
import { ReactUnit } from '../unit/react-unit-class';

export class ReactPrimer implements IPrimer<TReactElement> {
  public element: TReactElement;
  public target: HTMLElement;
  public readonly unitPrototype: IUnit<TReactElement, unknown, unknown>;

  public constructor() {
    this.unitPrototype = ReactUnit.prototype;
  }

  public getUnitPrototype(): IPrimerUnitPrototype<TReactElement> {
    const { unitPrototype } = this;

    return { unitPrototype };
  }

  public setElement(param: IPrimerElement<TReactElement>): void {
    const { element } = param;

    this.element = element;
  }

  public setTarget(param: IPrimerTarget): void {
    const { target } = param;

    this.target = target;
  }

  public start(): void {
    const { element, target } = this;

    render(element, target);
  }
}
