// requirements
const express = require( 'express' );
const nunjucks = require( 'nunjucks' );
const app = express();
const routes = require('./routes');

// NUNJUCKS BABY
let locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.use('/', routes);
app.use(express.static('public'));

// NUNJUCKS DONE QUICK BABY (#EXPRESS COMBO MEAL) i.e. configuration
app.set('view engine', 'html'); // work with html files
app.engine('html', nunjucks.render); // use nunjucks
nunjucks.configure('views', {noCache: true, showForm: true}); // point to templates

//BABY GOT APPS
app.use(function (req, res, next) {
    //console.log(Object.keys(req));
    console.log('Request recieved');
    next();
});

// //HOME PAGEY
// app.get('/', function (req, res, next) {

//   nunjucks.render('index.html', locals, function (err, output) {
//     // if there's an error tell express there's an error
//     if (err) return next(err);
//     // send output to the user
//     res.send(output);
//   });

// });

// app.get('/news', function (req, res) {
//   res.send('Ain\'t no news');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

