class TimeMap {
    constructor() {
        this.keyStore = new Map();
        
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        // can use binary search to search through the list of [value, timestamp]
        // uses less space memory than nested hashmap
            // constraints mentions 10^7 uBounded "timestamp"
            // if we use nested hashmap, memory causes ETL

        if (!this.keyStore.has(key)) this.keyStore.set(key, []);
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        // ** timestamp strictly increases

        if (!this.keyStore.has(key)) return "";

        // use binary search
        const vals = this.keyStore.get(key);
        let left = 0;
        let right = vals.length - 1;

        // edge case: if the latest timestamp is STE to 'timestamp'
        if (vals[right][1] <= timestamp) return vals[right][0];

        // edge case: if the earliest timestamp is bigger than 'timestamp'
        if (vals[left][1] > timestamp) return "";

        while (left <= right) {
            let mid = Math.trunc((left + right) / 2);
            const [currVal, currTime] = vals[mid];

            if (currTime === timestamp) return currVal;

            if (currTime <= timestamp) left = mid + 1;
            else right = mid - 1;
        }
        // there is a case answer lies 1 before left
        if (vals[right][1] <= timestamp) return (vals[right][0]);

        // return null;
    }
}
