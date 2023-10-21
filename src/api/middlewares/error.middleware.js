const { ApiError } = require('../api.error.js');

const errorMiddleware = (err, req, res, _) => {
  if (err && err instanceof ApiError) {
    return res.error(err.status, err.message);
  }

  console.log(err.message);
  res.error(500, 'Oops, sorry we will fix it soon.');
}

exports.errorMiddleware = errorMiddleware;
