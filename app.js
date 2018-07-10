const express = require('express');
const app = express();
const pug = require('pug');

const data = require('./data.json');

app.set('view engine','pug');

app.use(express.static('public'));

app.get('/',(req,res)=>{
	res.render('invoice', data);
});

app.listen(3000);    