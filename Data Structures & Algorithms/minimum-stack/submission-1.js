class MinStack {
    constructor() {
        this.stack = new Array();
        this.min = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.min.length === 0) this.min.push(val);
        else {
            // stack: 1 0 2
            // min:   1 0 0
            this.min.push(Math.min(val, this.min[this.min.length - 1]));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min.pop();
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
        return this.min[this.min.length - 1];
    }

    // **
}
