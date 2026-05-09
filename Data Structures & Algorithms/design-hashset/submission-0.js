class MyHashSet {
    // static hashing (modulo operation)
    // - constraints says max key value is 1000000 - we mod inputs by 1000000
    constructor() {
        this.val = 1000000
        this.list = new Array(this.val + 1); // add 1 to have "indices" up to 1000000
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.list[key % this.val] = true;
        return null;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.list[key % this.val] = null;
        return null;        
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        if (!this.list[key % this.val]) return false;
        return true;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
