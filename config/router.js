const router = require('express').Router();
const projects = require('../controllers/projectController');
const supports = require('../controllers/supportController');


router.route('/projects')
  .get(projects.index)
  .post(projects.create);

router.route('/projects/:id')
  .get(projects.show)
  .put(projects.update)
  .delete(projects.delete);
  
router.post('/projects/:projectId/supports', supports.create);


module.exports = router;
