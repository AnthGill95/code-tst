/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
  const chars = {};
  const strArr = [...str]
  strArr.forEach(c => {
    if (chars[c] === undefined) chars[c] = 1;
    else chars[c]++;
  })
  for (let i = 0; i < strArr.length; i++)
    if (chars[strArr[i]] === 1) return strArr[i];
}

module.exports = solution
