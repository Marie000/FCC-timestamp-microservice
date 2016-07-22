var express = require('express');
var app = express();

app.get('/:date',function(req,res){
  var input = decodeURI(req.params.date);
  var isNumber = /^\d+$/.test(input);
  var unix, string;
  if(isNumber){
    var t = new Date(parseInt(input));
    string = t.toUTCString();
    unix = input;
  } else {
    unix = Date.parse(input) || "null";
    string= Date.parse(input) ? input : "null";
  }

  var output = {
    string: string,
    unix:unix,
  };

  res.json(output)
});

app.listen(3000);