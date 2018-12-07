const User = require('../models/user');


function showRoute(req, res, next){
  User.findById(req.params.id)
    .populate('commentedByMe')
    .populate('supportedByMe')
    // Remove the password before sending to the client!!
    .select('-password')
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

module.exports = {
  show: showRoute
};
