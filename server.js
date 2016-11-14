var express = require('express');
var app = express();

app.use('/files', express.static(__dirname + '/public'));

app.get('/*', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 8080, function() {
  console.log('Server started: ', `http://${process.env.C9_HOSTNAME}`);
});