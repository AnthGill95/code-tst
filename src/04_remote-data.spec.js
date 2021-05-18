const solution = require('./04_remote-data')

test('all users have been accounted for', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  expect(actual.length).toBe(expected)
})

/// ////////////////////////////////////////////////////////////////////////////
// Custom Tests ///////////////////////////////////////////////////////////////
/// ////////////////////////////////////////////////////////////////////////////

test('all have completed key and it is a number', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  actual.forEach(e => {
    expect(typeof e.completed).toBe('number')
  })
})
