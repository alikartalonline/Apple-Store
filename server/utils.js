const fs = require("fs")

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function(err, data){
      if (err) {
        return reject(err)
      }
      return resolve(JSON.parse(data))
    });
  })
}
/**
 * 
 * @param {string} text 
 * @returns string
 */


module.exports = {
  readFileAsync,

}