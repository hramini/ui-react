import { IBasicProperties } from 'ui-wrapper';
import { TReactElement } from '../../type/element-type';

export interface IReactUnitTagDemoProps extends IBasicProperties<TReactElement> {
  name?: string;
}

export interface IReactUnitTagDemoStates {
  name?: string;
}
