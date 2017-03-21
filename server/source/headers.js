import express from 'express';
import { Headers } from '../db/model';
const router = express.Router();

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

router.post('/', (req, res, next) => {
	const header = req.body;
	addHeaders(header, (newHeaders) => {
		res.json(newHeaders);
	});
});

export default router;
