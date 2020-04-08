import { IElement } from 'ui-wrapper';
import { TReactElement } from '../../type/element-type';
import { ReactUnit } from '../react-unit-class';
import { IReactUnitFrameDemoProps, IReactUnitFrameDemoStates } from './react-unit-frame-demo-interface';
export declare class ReactUnitFrameDemo extends ReactUnit<IReactUnitFrameDemoProps, IReactUnitFrameDemoStates> {
    lifeCycleText: string;
    private readonly builder;
    constructor();
    provide(): IElement<TReactElement>;
}
