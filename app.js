// requirements
const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const app = express();

// NUNJUCKS BABY
let locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

// NUNJUCKS DONE QUICK BABY (#EXPRESS COMBO MEAL)
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

//BABY GOT APPS
app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    //console.log(Object.keys(req));
    console.log('Request recieved');
    next();
});

app.get('/', function (req, res, next) {

  nunjucks.render('index.html', locals, function (err, output) {
    // if there's an error tell express there's an error
    if (err) return next(err);
    // send output to the user
    res.send(output);
  });

});

app.get('/news', function (req, res) {
  res.send('Ain\'t no news');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

