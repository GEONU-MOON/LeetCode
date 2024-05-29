/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [],
    map = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (s[i] !== map[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};