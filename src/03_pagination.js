/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  const pageNumberBound = pageNumber < 1 ? 1 : pageNumber;
  const offset = (pageNumberBound - 1) * itemsPerPage;
  const pagedData = pageData.slice(offset, offset + itemsPerPage)
  if (pagedData.length === 0) return null;
  return pagedData;
}

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

module.exports = { solution, data }
