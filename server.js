// adding requirements
const express = require('express')
const exprHBS = require('express-handlebars');
const bodyParse = require('body-parser');
const exprValid = require('express-validator');

// initializing variables
const app = express()

// set up handlebars
app.engine('.hbs', exprHBS({
	extname: '.hbs',
	defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

// use body parser
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

// use validator - adding after parser init!
app.use(exprValid());

// // use method override - with POST having ?_method=DELETE or ?_method=PUT
// app.use(express.static('public'));
// app.use(methodOverride('_method'));




app.get('/', (req, res) => {
	res.render('home', { hello: hello });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
});