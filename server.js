var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/Gui.html')
})
app.get(/^(.+)$/, function(req, res){
    console.log('static file request : ' + req.params);
    res.sendfile( __dirname + req.params[0]);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
