import { Headers } from '../db/model';

const getHeaders = (callback) => {
  Headers.find({}, callback)
};

const addHeaders = (header, callback) => {
	const newHeaders = new Headers(header);
	newHeaders.save().then((newHeaders) => {
		callback(newHeaders);
	})
}

const get = (req, res, next) => {
  getHeaders((err, headers) => {
		if(err){
			throw err;
		}
		res.json(headers);
	});
};

const post = (req, res, next) => {
	const header = req.body;
	addHeaders(header, (newHeaders) => {
		res.json(newHeaders);
	});
};

export default {
  get,
  post,
};
