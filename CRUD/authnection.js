
const staticToken = "atmiyauniversity"

function tokenMiddleware(req, res, next) {
    // Extract the token from headers
    const token = req.headers['authorization'];
  
    // Check if the token matches the static token
    if (token && token === staticToken) {
      // Token is valid, proceed to the next middleware or route handler
      next();
    } else {
      // Token is invalid, respond with a 401 Unauthorized status
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
  
  module.exports = tokenMiddleware;