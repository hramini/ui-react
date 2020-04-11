import { createElement } from 'react';
import { IElement } from 'ui-wrapper';
import { IReactElementOption } from '../type/element-option-interface';
import { TReactElement } from '../type/element-type';
import {
  IReactBuilderCheckChildNodesIn,
  IReactBuilderCheckChildNodesOut
} from './react-builder-interface';

export class ReactBuilder {
  private childNodes: (string | TReactElement)[];
  private element: TReactElement;

  public baseBuild<P, S>(param: IReactElementOption<P, S>): IElement<TReactElement> {
    const { name, properties, children } = param;
    this.childNodes = children ?? [];
    const { childNodes } = this;
    const { status } = ReactBuilder.checkChildNodes({ childNodes });

    if (status) {
      const [child] = childNodes;
      this.element = createElement(name, properties, child);
    } else {
      this.element = createElement(name, properties, ...childNodes);
    }

    const { element } = this;

    return { element };
  }

  private static checkChildNodes(
    param: IReactBuilderCheckChildNodesIn
  ): IReactBuilderCheckChildNodesOut {
    const { childNodes } = param;
    const { length, 0: child } = childNodes;

    if (length === 1 && typeof child === 'string') {
      return { status: true };
    }

    return { status: false };
  }
}
