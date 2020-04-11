import { TReactElement } from '../type/element-type';

export interface IReactBuilderCheckChildNodesIn {
  childNodes: (string | TReactElement)[];
}

export interface IReactBuilderCheckChildNodesOut {
  status: boolean;
}
