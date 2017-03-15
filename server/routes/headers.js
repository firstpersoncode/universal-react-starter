var express = require('express');
var router = express.Router();
const { Headers } = require('../db/model');

const getHeaders = (callback) => {
  Headers.find({}, callback)
};

const addHeaders = (header, callback) => {
	const newHeaders = new Headers(header);
	newHeaders.save().then((newHeaders) => {
		callback(newHeaders);
	})
}

router.get('/', (req, res, next) => {
  getHeaders((err, headers) => {
		if(err){
			throw err;
		}
		res.json(headers);
	});
});

router.post('/', (req, res) => {
	const header = req.body;
  console.log(header)
	addHeaders(header, (newHeaders) => {
		res.json(newHeaders);
	});
});

module.exports = router;
