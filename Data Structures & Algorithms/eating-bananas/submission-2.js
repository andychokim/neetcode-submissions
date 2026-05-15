class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // signs: 1000 piles.length, 10^7 h
        // pattern: sort to find max eating rate

        // the upper bound of the 'eating rate' is max(piles), but we want the
        // smallest possible eating rate.
        // use binary search to find the minimum possible eating rate (k)?      

        // sort (a-b) the piles list - O(n log n), n: piles.length
        // set left = 0, right = piles.length - 1, mid = (left+right) / 2
        // check if piles[mid] is a "possible" eating rate
            // if right === left return
            // if it is possible - new "smallest" k, right = mid
            // if not, "smallest" k is bigger than mid, left = mid+1
        
        // ** eating rate may exist outside of piles[n]s.
        // instead of BS through piles, BS through a new list of 1 ~ max(piles)
            // no need to sort piles list.

        // *** TLE due to the creation of array from 1 to uBound - memory boom
        // if BSing through 1 ~ 'max', making an array is just extra memory usage
        // since array[0] = 1 ... array[max-1] = max.
        // without creating an array, can instead just set left = 1 (array[0] value)
        
        let left = 1;
        let right = Math.max(...piles);
        let res = right; // worst case scenario, 

        // binary search - O(log (uBound))
        while (left <= right) {
            const mid = Math.trunc((left + right) / 2);

            // check if "val" is a k candidate
            let count = 0;
            let i = 0;
            while (i < piles.length) {
                let hours_took  = (piles[i] / mid);
                if (hours_took <= 1) count += 1;
                else count += Math.ceil(hours_took);
                i += 1;
            }
            
            if (count <= h) {
                res = mid; // new "minimum" candidate found, save it.
                right = mid - 1;
            }
            else left = mid + 1;
        }

        return res;
    }
}
