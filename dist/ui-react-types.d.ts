// Generated by dts-bundle-generator v4.0.0

import { Component, ReactElement } from 'react';
import { IElement, IElementOption, IFrameBuilder, IFrameElementOption, IPrimer, IPrimerElement, IPrimerTarget, ITagBuilder, ITagElementOption, IUnit, IUnitAlterStateOptions, IUnitOnBeforeUpdateCheck } from 'ui-wrapper';

export declare type TReactElement = ReactElement;
export declare abstract class ReactUnit<P, S> extends Component<P, S> implements IUnit<TReactElement, P, S> {
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
	abstract provide(): IElement<TReactElement>;
}
export interface IReactElementOption<P, S> extends IElementOption<TReactElement, P, S> {
	name: string | (new () => ReactUnit<P, S>);
}
export interface IReactFrameElementOption<P, S> extends IFrameElementOption<TReactElement, P, S> {
	name: new () => ReactUnit<P, S>;
}
export interface IReactTagElementOption<P, S> extends ITagElementOption<TReactElement, P, S> {
	name: string;
}
declare class ReactBuilder {
	private childNodes;
	private element;
	baseBuild<P, S>(param: IReactElementOption<P, S>): IElement<TReactElement>;
}
export declare class ReactFrameBuilder extends ReactBuilder implements IFrameBuilder<TReactElement> {
	buildElement<P, S>(param: IReactFrameElementOption<P, S>): IElement<TReactElement>;
}
export declare class ReactTagBuilder extends ReactBuilder implements ITagBuilder<TReactElement> {
	buildElement<P, S>(param: IReactTagElementOption<P, S>): IElement<TReactElement>;
}
export declare class ReactPrimer implements IPrimer<TReactElement> {
	element: TReactElement;
	target: HTMLElement;
	constructor();
	setElement(param: IPrimerElement<TReactElement>): void;
	setTarget(param: IPrimerTarget): void;
	start(): void;
}

export {};
