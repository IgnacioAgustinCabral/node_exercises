const fs = require('fs')

fs.writeFileSync(__dirname+'/notes.txt','notes from Node.js.')

fs.appendFileSync(__dirname+'/notes.txt','appending from Node.js')
