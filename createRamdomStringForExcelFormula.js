var randomstring = require("randomstring")
var fs = require('fs')

//Want max length of String
var want = 1000
var cellStart = 8
var cellend = 30358

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

var temp = ''
for(var i=cellStart;i<=cellend;i++){
    temp = temp + `=IF(E${i}="Physical Product","${randomstring.generate(getRandomInt(0,want+1))}","")\r\n`
}

fs.writeFile('excel.txt',temp, () => console.log('done'))

