/**
 * Crafts a hello message
 * @param {string} input The name to say hello to
 * @returns {string | undefined} a string when an input is provided or undefined.
 */
function createHelloMessage(input) {
  // Check the input for issues
  if (
    input === undefined ||
    typeof input === 'undefined' ||
    input.length === 0
  ) {
    return undefined;
  }
  // If no issues are present with the input, return a message
  return `Hello, ${input}`;
}

module.exports = createHelloMessage;
