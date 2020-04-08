/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
import { Component } from 'react';
import { IElement, IUnit, IUnitAlterStateOptions, IUnitOnBeforeUpdateCheck } from 'ui-wrapper';
import { TReactElement } from '../type/element-type';

export abstract class ReactUnit<P, S> extends Component<P, S>
  implements IUnit<TReactElement, P, S> {
  // public props: Readonly<P>;
  public constructor(props?: P) {
    super(props as P);
    this.onBeforeProvide();
  }

  public alterState<K extends keyof S>(param: IUnitAlterStateOptions<S, K>): void {
    const { state, callbackFunction } = param;
    this.setState(state, callbackFunction);
  }

  public componentDidMount(): void {
    this.onAfterProvide();
  }

  public shouldComponentUpdate(): boolean {
    const { shouldUpdate } = this.onBeforeUpdate();

    return shouldUpdate;
  }

  public componentDidUpdate(): void {
    this.onAfterUpdate();
  }

  public componentWillUnmount(): void {
    this.onBeforeDispose();
  }

  public render(): TReactElement {
    const { element } = this.provide();

    return element;
  }
  // //#endregion

  // //#region IUnitLifeCycle
  public onBeforeProvide(): void {}

  public onAfterProvide(): void {}
  public onBeforeUpdate(): IUnitOnBeforeUpdateCheck {
    return { shouldUpdate: true };
  }

  public onAfterUpdate(): void {}
  public onBeforeDispose(): void {}

  public abstract provide(): IElement<TReactElement>;
  // //#endregion
}
