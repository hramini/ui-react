"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class ReactBuilder {
    baseBuild(param) {
        const { name, properties, children } = param;
        this.childNodes = (children !== null && children !== void 0 ? children : []);
        const { childNodes } = this;
        const { status } = ReactBuilder.checkChildNodes({ childNodes });
        if (status) {
            const [child] = childNodes;
            this.element = react_1.createElement(name, properties, child);
        }
        else {
            this.element = react_1.createElement(name, properties, ...childNodes);
        }
        const { element } = this;
        return { element };
    }
    static checkChildNodes(param) {
        const { childNodes } = param;
        const { length, 0: child } = childNodes;
        if (length === 1 && typeof child === 'string') {
            return { status: true };
        }
        return { status: false };
    }
}
exports.ReactBuilder = ReactBuilder;
