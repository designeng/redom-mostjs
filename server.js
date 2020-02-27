var express = require('express');
var compression = require('compression');

var app = express();

app.use(compression());
app.use(express.static('public'));

app.listen(3003, function (err) {
  if (err) throw err;

  console.log('RE:DOM dev running, browse to http://localhost:3003');
});
