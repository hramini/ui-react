import { createElement } from 'react';
import { IElement } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';
import { IReactBuilderEntry } from './react-builder-interface';

export class ReactBuilder<P, S = never> {
  public constructor(private readonly entry: IReactBuilderEntry<P, S>) {}

  public createElement(): IElement<TReactElement> {
    const { entry } = this;
    const { element, properties, children } = entry;
    const childNodes: (string | TReactElement)[] = children ?? [];
    const reactElement: TReactElement = createElement(element, properties, ...childNodes);

    return { element: reactElement };
  }
}
