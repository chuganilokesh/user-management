const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/api')

const cors=require('cors')
const app = express()
app.use(cors());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//header

app.use(express.json())
app.use('/api', userRouter)


module.exports=app