import { IBasicProperties } from 'ui-wrapper';
import { TReactElement } from '../../ui-react-type';

export interface IReactUnitTagDemoProps extends IBasicProperties<TReactElement> {
  readonly name?: string;
}

export interface IReactUnitTagDemoStates {
  readonly name?: string;
}
