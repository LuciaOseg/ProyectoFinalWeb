const mongoose = require('mongoose')
const connectionURL = `mongodb+srv://LuciaOseg:Maya2014.@cluster0-azb6v.mongodb.net/MyClimbingDiary?retryWrites=true&w=majority`

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,     // crear indexes
  useUnifiedTopology: true,
  useFindAndModify: false
})
