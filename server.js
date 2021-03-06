const express =require('express')
const path =require ('path')
const moment = require ('moment')
const app =express()
app.use(express.static('public'));

// let date =moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(date)
const day = moment().format("dddd");
const hour = moment().get('hour');
console.log(hour)
// addRequestDate = (req, res, next) => {
//     let requestAt = new Date()
//     console.log(requestAt)
//     next()
// }

function time(req, res, next) {
    
    
    let HEUREDEBUT =8
    let HEUREFIN = 21
    if ((day === "Sunday") | (day === "Saturday")) {
      
      return res.send(
        `<h1 style='color:red; margin:100px 50px ; text-align:center'>We're not working today! </h1>`
      );
    }
    if ((hour < HEUREDEBUT) | (hour > HEUREFIN) ) { return res.send(`<h1 style='color:red; margin:100px 50px 
    ; text-align:center'>We work only from 8 to 16</h1>`);}
    
  
  
    next();
  }
const port =5300
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.get('/', time,function(req,res){
    res.render(`index`)
})
app.get('/home',time, function(req,res){
    res.render(`home`)
})
app.get('/contact',time, function(req,res){
    res.render(`contact`)
})
app.get('/services',time, function(req,res){
    res.render(`services`)
})

app.listen(port ,function(){

    console.log(`Listen on port  ${port}...`)
})