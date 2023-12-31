const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser'); 

const {User} = require("./models/User")

const config = require("./config/key");

//application/x--ww-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

//application/json
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    // useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log("mongoDB Connected.."))
.catch(err=> console.log("error"))


app.get('/', (req, res) => {
  res.send('Hello YM World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
app.post('/register',(req,res) => {
  
  //회원가입할때 필요한 정보들을 client 에서 받아오면
  //그것들을 데이터 베이스에 넣어준다.
  

  const user = new User(req.body)

  user.save((err,userinfo)=> {
    if(err) return res.json({ success : false, err})
    return res.status(200).json({
      success :true
    })

  })
*/
  
  app.post('/register', async (req, res) => {
    //회원가입시 필요 정보를 client에서 가져오면
    //데이터베이스에 삽입한다
  
    //body parser를 통해 body에 담긴 정보를 가져온다
    const user = new User(req.body)
  
    //mongoDB 메서드, user모델에 저장
    const result = await user.save().then(()=>{
      res.status(200).json({
        success: true
      })
    }).catch((err)=>{
      res.json({ success: false, err })
    })
  })
  


// })
