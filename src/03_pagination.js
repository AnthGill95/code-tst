/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  const pageNumberBound = Math.round(pageNumber) < 1 ? 1 : Math.round(pageNumber)
  const itemsPerPageInt = Math.round(itemsPerPage)
  const offset = (pageNumberBound - 1) * itemsPerPageInt
  const pagedData = pageData.slice(offset, offset + itemsPerPageInt)
  if (pagedData.length === 0) return null
  return pagedData
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
