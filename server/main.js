var express = require('express');
var app = express();

app.use(express.static('dist'));
app.use(express.static('static'));

app.listen(process.env.PORT, function() {
  console.log("listening");
});