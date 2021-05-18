/**
 * This function returns the values of the input object as an array
 * @param {object} obj
 */
function solution (obj) {
  return Object.keys(obj).map(e => obj[e]);
}

module.exports = solution
