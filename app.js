const express = require( 'express' );
const app = express();


app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    //console.log(Object.keys(req));
    console.log('Request recieved:' + req.statusMessage);
    next();
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/news', function (req, res) {
  res.send('Ain\'t no news');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
