// #2- write some unit tests, routing test (done)
// #3- and provide a README for your project with setup/installation/testing instructions.
// #4- swagger ui
// #5- block other methods except Get
// #6- E2E test in backend side

const express = require('express');

const companiesData = require('../../data/source.json');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'v1' });
});

/* GET array of companies. */
router.get('/company', (req, res, next) => {
	return res.status(200).json({ msg: `ok`, data: companiesData });
});

module.exports = router;
