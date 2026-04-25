class MinStack {
    constructor() {
        this.stack = new Array();
        this.copy = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.copy.push(Math.min(...(this.stack)));
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.copy.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.copy[this.copy.length - 1];
    }

    // -2 0 -3
}
