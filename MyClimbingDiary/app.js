
const express = require('express')
const cors = require('cors')
const app = express()

require('./db/mongoose.js')

const routerr = require('./controllers/routes.js')

const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(routerr)

app.listen(port, function() {
  console.log('Server up and running on port', port)
})
