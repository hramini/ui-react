import { IElement, IUnitOnBeforeUpdateCheck } from 'ui-wrapper';
import { TReactElement } from '../../type/element-type';
import { ReactUnit } from '../react-unit-class';
import { IReactUnitTagDemoProps, IReactUnitTagDemoStates } from './react-unit-tag-demo-interface';
export declare class ReactUnitTagDemo extends ReactUnit<IReactUnitTagDemoProps, IReactUnitTagDemoStates> {
    lifeCycleText: string;
    private readonly builder;
    constructor();
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateCheck;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
    provide(): IElement<TReactElement>;
}
