class MinStack {
    constructor() {
        this.stack = new Array();
        this.minManager = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minManager.length === 0) this.minManager.push(val);
        else {
            // stack: 1 0 2
            // min:   1 0 0
            this.minManager.push(Math.min(val, this.minManager[this.minManager.length - 1]));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minManager.pop();
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
        return this.minManager[this.minManager.length - 1];
    }

    // ** to record minimum value within stack at O(1) time, we can record
    // the stack's minimum value at that index within another stack array
    // ex: 1/1(only value, so when original stack is at 1[index 0], min is itself) ->
    //     0/0(0[incoming] < 1[copy stack's min], when original stack is at 0[index 1] min will be 0) ->
    //     3/0(3 > 0, at 3[index2] min will still be 0)
    // manage this while pushing, but for original stack's pop, we pop the manager as well
}
