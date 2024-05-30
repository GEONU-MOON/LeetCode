/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let n = nums.length;
    let stack = [];
    let min = new Array(n);
    min[0] = nums[0];
    for (let i = 1; i < n; i++) {
        min[i] = Math.min(min[i - 1], nums[i]);
    }
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > min[i]) {
        while (stack.length && stack[stack.length - 1] <= min[i]) {
            stack.pop();
        }
        if (stack.length && stack[stack.length - 1] < nums[i]) {
            return true;
        }
        stack.push(nums[i]);
        }
    }
    return false;
};