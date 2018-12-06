const Support = require('../models/support');

function indexRoute(req, res, next) {
  Support.find({ $or: [{ from: req.tokenUserId }, { to: req.tokenUserId }] })
    .populate('from to', 'username')
    .sort('createdAt')
    .then(supports => res.json(supports))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.from = req.tokenUserId;
  Support.create(req.body)
    .then(support => Support.populate(support, 'from to'))
    .then(support => res.json(support))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Support.findOneAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  delete: deleteRoute
};
