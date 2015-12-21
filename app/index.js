var koa = require('koa')
var app = global.app = koa()
var loggerMap = require('./utils/log')
var errorLogger = loggerMap.errorLogger
require('./filters')
require('./controllers')
app.on('error', function (err) {
    errorLogger.error(err)
})
process.on('uncaughtException', function (err) {
    errorLogger.error('uncaught-', err)
})

var port=6001
app.listen(port)
console.log(`server started at ${port}`)
