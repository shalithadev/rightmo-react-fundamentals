function isBracketsBalanced(str) {
  const stack = [];
  const openingBrackets = ["{"];
  const closingBrackets = ["}"];
  const bracketMap = {
    "}": "{",
  };

  if (!str) return false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      const lastOpenBracket = stack.pop();
      if (bracketMap[char] !== lastOpenBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

let string = "";

console.log("Balaced: ", isBracketsBalanced(string));
