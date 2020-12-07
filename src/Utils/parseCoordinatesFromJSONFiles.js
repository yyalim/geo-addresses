/**
 * Promisified FileReader
 * More info https://developer.mozilla.org/en-US/docs/Web/API/FileReader
 * @param {File} file
 * @returns {Promise} Promise objects which resolve FileReader
 */
export function readFile(file) {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.readAsText(file)
    reader.onload = () => {
      resolve(reader)
    }
    reader.onerror = (error) => reject(error)
  })
}

/**
 * Promisified JSON parser from array of Files
 * @param {Array.<File>} files
 * @returns {Promise} Promise objects which resolves each item in parsed array
 */
export function parseCoordinatesFromFileReaders(fileReaders) {
  return fileReaders
    .reduce((coordinates, fileReader) => [...coordinates, ...JSON.parse(fileReader.result)], []);
}

/**
 * Promisified JSON parser from array of Files
 * @param {Array.<File>} files
 * @returns {Promise} Promise objects which resolves each item in parsed array
 */
export default function parseCoordinatesFromJSONFiles(files) {
  return new Promise((resolve, reject) => {
    try {
      const readFilePromises = Array.from(files)
        .map(async (file) => await readFile(file));

      Promise.all(readFilePromises)
        .then(parseCoordinatesFromFileReaders)
        .then(resolve)
    } catch(error) {
      reject(error);
    }
  });
}
