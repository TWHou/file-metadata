// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var upload = require('multer')();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/', upload.single('file'), function(req, res) {
  if (req.file) {
    res.json({size: req.file.size});
  } else {
    res.json({Error: "please upload a file."});
  }
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
