const moment = require('moment')

console.log(moment().format())

let now = moment()

console.log('Current timestamp', now.unix())

let timestamp = 1475234704
let currentMoment = moment.unix(timestamp)

console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'))

// January 3rd, 2016 @ 12:12 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'))
