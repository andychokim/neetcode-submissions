class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // for each char of tokens
            // if char is not an operator,
                // change it to number
                // push the number into a temp array
            // if char is an operator,
                // run the calculation with 2-last numbers in the array
                    // pop twice for each number -> prevents infinite expansion of the array(stack)
                // push the result in the array

        let stack = new Array();

        for (let char of tokens) {
            let num1;
            let num2;
            switch (char) {
                case '+':
                    num1 = stack.pop();
                    num2 = stack.pop();
                    stack.push(num1 + num2);
                    console.log('+', stack[stack.length - 1]);
                    break;
                case '-':
                    num1 = stack.pop();
                    num2 = stack.pop();
                    stack.push(num2 - num1); // watch out the popping order
                    console.log('-', stack[stack.length - 1]);
                    break;
                case '*':
                    num1 = stack.pop();
                    num2 = stack.pop();
                    stack.push(num1 * num2);
                    console.log('*', stack[stack.length - 1]);
                    break;
                case '/':
                    num1 = stack.pop();
                    num2 = stack.pop();
                    let division = num2 / num1;
                    // truncates to zero, not to bottom
                    if (division > 1) division = Math.floor(division);
                    else if (division < -1) division = Math.ceil(division);
                    else division = 0;
                    stack.push(division);
                    console.log('/', stack[stack.length - 1]);
                    break;
                default:
                    stack.push(Number(char));
            }
        }
        return (stack.pop());
    }
}
