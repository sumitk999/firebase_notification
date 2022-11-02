const bodyParser = require('body-parser')
const express = require('express')
const route = require('./src/firebaseModule/route')


const app = express()
app.use(bodyParser.json())

const port = 3000

app.use('/',route )
app.listen(port, () =>{
console.log("listening to port : "+port)
})