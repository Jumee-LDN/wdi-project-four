const Project = require('../models/project');


function createRoute(req, res, next){
  req.body.commentBy = req.tokenUserId;
  console.log(`req.body is: ${req.body}, req.params.projectId is ${req.params.projectId}`);
  Project
    .findById(req.params.projectId)
    .populate('comments.commentBy')
    .exec()
    .then(project => {
      project.comments.push(req.body);
      console.log('creating a comment', req.body);
      return project.save();
    })
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
