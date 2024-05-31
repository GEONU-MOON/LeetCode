/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        let l = intervals[i][0];
        let r = intervals[i][1];
        if (res.length === 0 || res[res.length - 1][1] < l) {
        res.push([l, r]);
        } else {
        res[res.length - 1][1] = Math.max(res[res.length - 1][1], r);
        }
    }
    return res;
};