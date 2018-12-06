const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Project = require('../models/project');
const User = require('../models/user');
const Support= require('../models/support');

mongoose.Promise = require('bluebird');

const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];

const supportData = [
  {
    from: userIds[2],
    to: userIds[0],
    amount: 2
  },
  {
    from: userIds[2],
    to: userIds[1],
    amount: 4
  }
];

const userData = [
  {
    _id: userIds[0],
    username: 'Jumee',
    email: 'j@j',
    password: 'pass',
    passwordConfirmation: 'pass'
  },
  {
    _id: userIds[1],
    username: 'Sean',
    email: 's@s',
    password: 'pass',
    passwordConfirmation: 'pass'
  },
  {
    _id: userIds[2],
    username: 'Penny',
    email: 'p@p',
    password: 'pass',
    passwordConfirmation: 'pass'
  }
];

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Project.create([
    {
      createdBy: userIds[0],
      title: 'I always wanted to be a doctor',
      from: 'Dancer',
      to: 'Doctor',
      goal: 5,
      comments: [
        {
          user: userIds[1],
          text: 'Good luck 👍'
        }, {
          user: userIds[2],
          text: 'Wow sounds great, you can do this.'
        }
      ]
    },
    {
      createdBy: userIds[1],
      title: 'test2',
      from: 'Plumber',
      to: 'Performer',
      goal: 10,
      comments: [
        {
          user: userIds[0],
          text: 'Are you sure??🙀'
        }, {
          user: userIds[2],
          text: 'As long as you like it...'
        }
      ]
    }
  ])
    .then(projects => {
      console.log(`${projects.length} projects created`);
      return User.create(userData);
    })
    .then(users => {
      console.log(`${users.length} users created`);
      // return Support.create(supportData);
      mongoose.connection.close();
    })
    // .then(supports => {
    //   console.log(`${supports.length} supports created`);
    // })
    .catch(err => console.log(err));
    // .finally(() => mongoose.connection.close());
});
