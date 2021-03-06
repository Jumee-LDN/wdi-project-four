const Project = require('../models/project');

function indexRoute(req, res, next) {
  Project.find()
    .populate('createdBy')
    .then(projects => res.json(projects))
    .catch(next);
}

function showRoute(req, res, next) {
  Project.findById(req.params.id)
    .populate('comments.commentBy createdBy')
    .then(project => res.json(project))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.createdBy = req.tokenUserId;

  Project.create(req.body)
    .then(project => {
      console.log('creating project, req.body is', req.body);
      res.status(201).json(project);
    })
    .then(project => {
      Project.populate(project, 'createdBy');
      res.json(project);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Project.findById(req.params.id)
    .then(project => project.set(req.body))
    .then(project => project.save())
    .then(project => res.json(project))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}



module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
