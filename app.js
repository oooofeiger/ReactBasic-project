var express = require('express');
var path = require('path');
var app = new express();

app.use(express.static(__dirname))
app.usr('*',function(req,res){
  res.sendFile(path.resolve(__dirname,'index.html'))
})
app.listen(8080);
console.log('app is running at port 8080')
