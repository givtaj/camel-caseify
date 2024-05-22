/**
 * Converts a string to camel case format.
 *
 * This function takes a string input and transforms it into camel case,
 * where the first letter of the first word is lowercase and the rest of the word is also lowercase,
 * and the first letter of each subsequent word is capitalized while the rest of the letters are in lowercase,
 * with all non-alphanumeric characters removed and splitting at appropriate places.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} - The camel case formatted string.
 */
export function camelCaseify(str: string): string {
  if (!str) return str;

  // Split the string by non-alphanumeric characters and transitions from lowercase to uppercase
  const words = str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add a space between camel case transitions
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2") // Separate words in cases like "UPPERCase"
    .replace(/([a-z])([0-9])/g, "$1 $2") // Separate words in cases like "lowercase123"
    .replace(/([0-9])([a-zA-Z])/g, "$1 $2") // Separate words in cases like "123lowercase"
    .trim()
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);

  if (words.length === 0) {
    return "";
  }

  const camelCasedWords = words.map((word, index) => {
    return index < 1
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return camelCasedWords.join("");
}
