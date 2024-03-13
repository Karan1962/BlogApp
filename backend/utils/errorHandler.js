 const errorHandler = (code, message) => {
  const error = new Error();
  error.status = code;
  error.message = message;
  return error;
};

export default errorHandler;