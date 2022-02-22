/**
 * @file Consuno Server-side
 * @author Shayan Zeinali <shayanzd3000@gmail.com>
 */

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT,PATCH');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Cache-Control,X-Auth-Token,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization'
	);

	if ('OPTIONS' === req.method) {
		res.sendStatus(204);
	} else {
		//move on
		next();
	}
});

// const indexRouter = require("./routes/index");
// const lcmRouter = require("./routes/lcm");

const v1 = require('./routes/v1');
const v2 = require('./routes/v2');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// setup swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Responds if the app is up and running
app.get('/healthcheck', (req, res) => res.sendStatus(200));

// app.use("/", indexRouter);
// app.use("/v1/api/", lcmRouter);

app.use('/api/v1/', v1);
app.use('/api/v2/', v2);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	res.status(404).json({ code: 404, msg: 'not found' });
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
