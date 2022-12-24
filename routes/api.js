const express = require('express')
const router = express.Router()

module.exports = router.get('/api', function (req, res, next) {
  res.json({
    test: true,
  })
})
