const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://fhfps7:dbals971006!@cluster0.cuf0ivv.mongodb.net/' ,{
    // useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log("mongoDB Connected.."))
.catch(err=> console.log("error"))

app.get('/', (req, res) => {
  res.send('Hello YM World! ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})