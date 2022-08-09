module.exports = function check(str, bracketsConfig) {
  let stack = [];

  const bracketsMap = {};
  const openBrackets = bracketsConfig.map(item => {
    bracketsMap[item[1]] = item[0];
    return item[0];
  });

  for (let i = 0; i < str.length; i++) {
    const currSymbol = str[i];
    const stackTopEl = stack[stack.length - 1];
    
    if (openBrackets.includes(currSymbol)) {
      if (bracketsMap[currSymbol] !== currSymbol || currSymbol !== stackTopEl) {
        stack.push(currSymbol);
      } else {
        stack.pop();
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (bracketsMap[currSymbol] === stackTopEl) {
        stack.pop();
      } else {
        return false;
      }
    }

  }

  return stack.length > 0 ? false : true;
}
