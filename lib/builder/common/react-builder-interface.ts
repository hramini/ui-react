import { IElementOption } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';
import { ReactUnit } from '../../unit/react-unit-class';

export interface IReactBuilderEntry<P, S> extends IElementOption<TReactElement, P> {
  readonly element: string | (new () => ReactUnit<P, S>);
}
