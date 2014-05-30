var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/seriestv', function(err, res){
		if(err) console.log('ERROR: Conectando a DB' + err);
		else console.log('coneccion a la BD satisfactoria');
});


app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/', function(req, res){
	res.send('Hola, mundo');
});

require('./routes')(app);


app.listen(5000);
console.log('Servidor express escuchando en el puerto 5000');