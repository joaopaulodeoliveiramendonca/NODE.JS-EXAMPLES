const fs = require('fs')

fs.readFile('gile.txt', 'utf8', (err, data) => {
  console.log(data)
})
