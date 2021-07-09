const express = require('express')
const app = express()
const port = 3005
const bodyParser = require('body-parser')
const cors = require('cors')

const indexRouter = require('./routes/index')

app.use(cors())

app.use(bodyParser.json())

app.use('/', indexRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
