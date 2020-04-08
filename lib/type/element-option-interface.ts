import { IElementOption, IFrameElementOption, ITagElementOption } from 'ui-wrapper';
import { ReactUnit } from '../unit/react-unit-class';
import { TReactElement } from './element-type';

export interface IReactElementOption<P, S> extends IElementOption<TReactElement, P, S> {
  name: string | (new () => ReactUnit<P, S>);
}

export interface IReactFrameElementOption<P, S> extends IFrameElementOption<TReactElement, P, S> {
  name: new () => ReactUnit<P, S>;
}

export interface IReactTagElementOption<P, S> extends ITagElementOption<TReactElement, P, S> {}
