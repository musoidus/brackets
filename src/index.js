module.exports = function check(str, bracketsConfig) {
  const stack = [];
  let currValStack = '';
  let currChar = '';
  let pairNum = -1;

  for (let i = 0; i <= str.length - 1; i++) {
    if (stack.length != 0) {
      currValStack = stack.pop();
      currChar = str.charAt(i);
      for (let bracketsPair of bracketsConfig) {
        if (currValStack === bracketsPair[0])
          pairNum = bracketsConfig.indexOf(bracketsPair);
      }
      if (!(pairNum >= 0 && currChar === bracketsConfig[pairNum][1])) {
        stack.push(currValStack);
        stack.push(currChar);
      }
    } else stack.push(str.charAt(i));
  }
  return stack.length === 0 ? true : false;
};
