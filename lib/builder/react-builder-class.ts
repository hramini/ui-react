import { createElement } from 'react';
import { IElement } from 'ui-wrapper';
import { IReactElementOption } from '../type/element-option-interface';
import { TReactElement } from '../type/element-type';

export class ReactBuilder {
  private childNodes: (string | TReactElement)[];
  private element: TReactElement;

  public baseBuild<P, S>(param: IReactElementOption<P, S>): IElement<TReactElement> {
    const { name, properties, children } = param;
    this.childNodes = children ?? [];

    this.element = createElement(name, properties, ...this.childNodes);

    return { element: this.element };
  }
}
