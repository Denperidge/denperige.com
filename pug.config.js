const fs = require('fs');

console.log("é")
let data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
console.log(data)

module.exports = {
    locals: {
        data: data
    }
}