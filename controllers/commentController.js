const Project = require('../models/project');


function createRoute(req, res, next){
  req.body.commentBy = req.tokenUserId;
  console.log('this is req.body ', req.body);
  Project
    .findById(req.params.projectId)
    .populate('comments.commentBy')
    .exec()
    .then(project => {
      project.comments.push(req.body);
      console.log('creating a comment', req.body);
      return project.save();
    })
    .then(project => Project.populate(project, 'comments.commentBy'))
    .then(project => res.json(project))
    .catch(next);
}

function deleteRoute(req, res, next){
  Project
    .findById(req.params.projectId)
    .populate('comments.commentBy')
    .then(project => {
      const comment = project.comments.id(req.params.commentId);
      comment.remove();
      return project.save();
    })
    .then(project => res.json(project))
    .catch(next);
}

module.exports = {
  create: createRoute,
  delete: deleteRoute
};
