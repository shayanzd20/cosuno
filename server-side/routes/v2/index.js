const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
	res.status(503).render('index', { title: 'v2 is under construction ;)' });
});

module.exports = router;
