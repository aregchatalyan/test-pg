class ApiError extends Error {
  status;

  constructor(status, message = '') {
    super(message);
    this.status = status;
  }

  static NotFound(message) {
    return new ApiError(404, message);
  }

  static UnprocessableEntity(message) {
    return new ApiError(422, message);
  }
}

exports.ApiError = ApiError;
