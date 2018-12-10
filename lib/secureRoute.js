const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

const unauthorisedMessage = {
  message: 'Unauthorised!'
};

function secureRoute(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).json(unauthorisedMessage);
  }
  const token = req.headers.authorization.replace('Bearer ', '');
  jwt.verify(token, secret, function(err) {
    if (err) {
      console.log('failed on line 16');
      res.status(401).json(unauthorisedMessage);
    } else {
      req.tokenUserId = jwt.decode(token).sub;
      next();
    }
  });
}

module.exports = secureRoute;
