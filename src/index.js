module.exports = function check(str, bracketsConfig) {
  let stack = [];

  const openBrackets = bracketsConfig.map(item => item[0]);
  const bracketsMap = {};
  bracketsConfig.forEach(item => bracketsMap[item[1]] = item[0]);

  for (let i = 0; i < str.length; i++) {

    if (openBrackets.includes(str[i])) {
      if (bracketsMap[str[i]] !== str[i] || bracketsMap[str[i]] === str[i] && str[i] !== stack[stack.length - 1]) {
        stack.push(str[i]);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (bracketsMap[str[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }

  }

  return stack.length > 0 ? false : true;
}
