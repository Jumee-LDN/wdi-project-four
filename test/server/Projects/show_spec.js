/* global api, expect, describe, it, beforeEach */

const Project = require('../../../models/project');

const userIds = [
  '5be9860fcb16d525543ceda1'
];

const userData = [
  {
    _id: userIds[0],
    username: 'Jumee',
    email: 'jumee@jumee',
    password: 'pass',
    passwordConfirmation: 'pass'
  }
];

const projectIds = [
  '5be9860fcb16d525543ceda5'
];

const projectData =
  {
    _id: projectIds[0],
    createdBy: userIds[0],
    title: 'Test data title',
    from: 'slave',
    to: 'tester',
    goal: 123,
    story: 'this is test story blabla',
    comments: [
      {
        commentBy: userIds[0],
        text: 'You should do it. Good luck 👍'
      }, {
        commentBy: userIds[0],
        text: 'Wow sounds great, you can do this.'
      }
    ]
  };

let projectId;

describe('Project SHOW', () => {

  beforeEach(done => {
    Project.remove({})
      .then(() => Project.create(projectData))
      .then(project => {
        projectId = project._id;
        done();
      });
  });

  it('should return a 200 response', done => {
    api.get(`/api/projects/${projectId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.get(`/api/projects/${projectId}`)
      .end((err, res) => {
        // res.body is the result you would see in Insomnia
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.get(`/api/projects/${projectId}`)
      .end((err, res) => {
        expect(res.body.title).to.eq(projectData.title);
        expect(res.body.goal).to.eq(projectData.goal);
        done();
      });
  });

});
