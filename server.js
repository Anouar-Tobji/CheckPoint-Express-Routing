const express =require('express')
const path =require ('path')
const app =express()
app.use(express.static('public'));



addRequestDate = (req, res, next) => {
    let requestAt = new Date()
    console.log(requestAt)
    next()
}
const port =5300
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.get('/',addRequestDate, function(req,res){
    res.render(`index`)
})
app.get('/home',addRequestDate, function(req,res){
    res.render(`home`)
})
app.get('/contact',addRequestDate, function(req,res){
    res.render(`contact`)
})
app.get('/services',addRequestDate, function(req,res){
    res.render(`services`)
})

app.listen(port ,function(){

    console.log(`Listen on port  ${port}...`)
})