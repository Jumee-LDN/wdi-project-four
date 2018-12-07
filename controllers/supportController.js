const Project = require('../models/project');


function createRoute(req, res, next){
  req.body.from = req.tokenUserId;
  console.log(`req.body.from is: ${req.body.from}`);

  Project
    .findById(req.params.id)
    .then(project => {
      project.supports.push(req.body);
      console.log(`req.body is: ${req.body}, project is: ${project}`);
      return project.save();
    })
    .then(project => res.json(project))
    .catch(next);
}


module.exports = {
  create: createRoute
};
