const fs = require('fs');

let data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

module.exports = {
    locals: {
        data: data
    }
}