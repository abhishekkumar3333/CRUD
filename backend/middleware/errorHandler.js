export const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Mongoose duplicate key error
  if (err.code === 11000) {
    error.message = 'Email already exists';
    return res.status(400).json({ message: error.message });
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((err) => err.message);
    error.message = messages[0];
    return res.status(400).json({ message: error.message });
  }

  res.status(error.statusCode || 500).json({
    message: error.message || 'Server Error'
  });
};
