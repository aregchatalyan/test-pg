const sendMiddleware = (req, res, next) => {
  const codes = {
    200: 'OK',
    404: 'Not Found',
    422: 'Unprocessable Entity',
    500: 'Internal Server Error'
  }

  res.success = (status, data = null, message = '') => {
    return res.status(status).json({
      status:  codes[status] || 'Unknown Status',
      message: message,
      data:    data
    });
  }

  res.error = (status, message = '') => {
    return res.status(status).json({
      status:  codes[status] || 'Unknown Status',
      message: message,
    });
  }

  next();
}

exports.sendMiddleware = sendMiddleware;
