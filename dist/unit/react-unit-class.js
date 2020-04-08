"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class ReactUnit extends react_1.Component {
    constructor(props) {
        super(props);
        this.onBeforeProvide();
    }
    alterState(param) {
        const { state, callbackFunction } = param;
        this.setState(state, callbackFunction);
    }
    componentDidMount() {
        this.onAfterProvide();
    }
    shouldComponentUpdate() {
        const { shouldUpdate } = this.onBeforeUpdate();
        return shouldUpdate;
    }
    componentDidUpdate() {
        this.onAfterUpdate();
    }
    componentWillUnmount() {
        this.onBeforeDispose();
    }
    render() {
        const { element } = this.provide();
        return element;
    }
    onBeforeProvide() { }
    onAfterProvide() { }
    onBeforeUpdate() {
        return { shouldUpdate: true };
    }
    onAfterUpdate() { }
    onBeforeDispose() { }
}
exports.ReactUnit = ReactUnit;
