import { render } from 'react-dom';
import { IPrimer, IPrimerElement, IPrimerTarget, Unit } from 'ui-wrapper';
import { TReactElement } from '../type/element-type';
import { ReactUnit } from '../unit/react-unit-class';

export class ReactPrimer implements IPrimer<TReactElement> {
  public element: TReactElement;
  public target: HTMLElement;

  public constructor() {
    Object.setPrototypeOf(Unit.prototype, ReactUnit.prototype);
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
