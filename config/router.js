const router = require('express').Router();
const projects = require('../controllers/projectController');
const comments = require('../controllers/commentController');
const supports = require('../controllers/supportController');
const users = require('../controllers/userController');

const auth = require('../controllers/authController');
const secureRoute = require('../lib/secureRoute');

router.route('/projects')
  .get(projects.index)
  .post(secureRoute, projects.create);

router.route('/projects/:id')
  .get(projects.show)
  .put(secureRoute, projects.update)
  .delete(secureRoute, projects.delete);

router.post('/projects/:id/supports', secureRoute, supports.create);

router.post('/projects/:projectId/comments', secureRoute, comments.create);
router.delete('/projects/:projectId/comments/:commentId', secureRoute, comments.delete);

router.route('/users/:id')
  .get(users.show);

router.post('/register', auth.register);
router.post('/login', auth.login);


module.exports = router;
