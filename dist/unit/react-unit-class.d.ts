import { Component } from 'react';
import { IElement, IUnit, IUnitAlterStateOptions, IUnitOnBeforeUpdateCheck } from 'ui-wrapper';
import { TReactElement } from '../ui-react-type';
export declare abstract class ReactUnit<P, S> extends Component<P, S> implements IUnit<TReactElement, P, S> {
    abstract provide(): IElement<TReactElement>;
    constructor(props?: P);
    alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void;
    componentDidMount(): void;
    shouldComponentUpdate(): boolean;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): TReactElement;
    onBeforeProvide(): void;
    onAfterProvide(): void;
    onBeforeUpdate(): IUnitOnBeforeUpdateCheck;
    onAfterUpdate(): void;
    onBeforeDispose(): void;
}
