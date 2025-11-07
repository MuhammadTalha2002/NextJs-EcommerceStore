// src/middlewares/error.middleware.js
export const errorMiddleware = (err, req, res, next) => {
    console.error('❌ Error:', err.stack);
    res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || 'Internal Server Error',
    });
  };