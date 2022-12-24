const path = require('path')
var createError = require('http-errors')
const express = require('express')
const app = express()

app.use(express.static('build'))

app.use(require('./routes/api'))

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).end()
})

app.listen(5000)
