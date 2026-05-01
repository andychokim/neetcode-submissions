class LRUCache {
    // signs: O(1) search/update, LRU cache, key-value pair
    // pattern: hashmap
        // allows O(1) of search and edit
        // hashmap still adds new pairs in order - making the LRU pair to be the first
        // ** map.keys() gives a singlely "linked list" -> .next() starting from header
        // ** map can act as a "queue"

    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map(); // <key, node> pairs
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            // access the key, then "re-add" it to bring it to the top of the map's stack
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // if we're updating a key
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        // else if the cache is full
        else if (this.cache.size === this.capacity) {
            // remove the LRU node
            this.cache.delete(this.cache.keys().next().value)
        }
        this.cache.set(key, value);
    }
}
