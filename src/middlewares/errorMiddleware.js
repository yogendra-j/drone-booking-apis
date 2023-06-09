export default function errorMiddleware(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Resource Not Found';
  
    res.status(statusCode).json({
      error: {
        code: statusCode,
        message: message
      }
    });
  }
  
  