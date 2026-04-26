class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // brute forcing: O(n^2). Goal: finish it in O(n) time
        // idea: use stack AND map <temp, index> pairs
        // original: 0 8 0 6 5 9 8
        // stack:    9
        // res:      1 4 1 2 1

        // manage two pointers: one following the insertion, one following the pop

        let res = new Array(temperatures.length);
        let stack = new Array();
        let tempMap = new Map(); 
        for (let i = 0; i < temperatures.length; i++) {
            let curr = temperatures[i];
            
            // update the map first
            if (tempMap.has(curr)) tempMap.get(curr).push(i);
            else tempMap.set(curr, [i]);

            // update the stack
            if ((i === 0) || stack.at(-1) >= curr) stack.push(curr);
            // if incoming temp is bigger than top of stack
            else {
                while (stack.at(-1) && (stack.at(-1) < curr)) {
                    let popped = stack.pop();
                    let warmDay = tempMap.get(curr).at(-1);
                    let coldDay = tempMap.get(popped).pop();
                    res[coldDay] = warmDay - coldDay;
                }
                stack.push(curr);
            };
        }
        // after for loop, if the stack is not empty
        if (stack.length > 0) res = Array.from(res).map((day) => (day === undefined) ? 0 : day);

        return res;
    }
}
