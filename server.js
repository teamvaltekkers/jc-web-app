var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.post('/arrival', async (req, res) => {
  try{
      io.emit('arrival', req.body);
      res.sendStatus(200);
  }
  catch (error){
    res.sendStatus(500);
    return console.log('error', error);
  }
  finally{
    console.log('Message Posted')
  }
});

var server = http.listen(process.env.PORT || 3000, () => {
  console.log('server is running on port', server.address().port);
});
