import { IFrameElementOption } from 'ui-wrapper';
import { ReactUnit, TReactElement } from '../../ui-react-expose';

export interface IReactFrameElementOption<P, S> extends IFrameElementOption<TReactElement, P, S> {
  readonly UnitConstructor: new () => ReactUnit<P, S>;
}
