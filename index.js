var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

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

app.listen(PORT,function(){
  console.log('server successfully started on port '+PORT);
});