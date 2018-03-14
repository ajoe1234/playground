const moment = require('moment')

var endDateString = "2018-03-14 19:30:43"

var endDate = moment(endDateString,'YYYY-MM-DD hh:mm:ss')
var curDate = moment()

console.log(curDate)
console.log(endDate)

var remainDay = endDate.diff(curDate,'days')
var remainHour = endDate.diff(curDate,'hours')
var remainMin = endDate.diff(curDate,'minutes')
var remainSec = endDate.diff(curDate,'seconds')

console.log(`${remainDay} Days : ${remainHour} Hours : ${remainMin} Mins`)