const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Project = require('../models/project');
const User = require('../models/user');

mongoose.Promise = require('bluebird');

const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3'
];

const supportIds = [
  '5be9bd11c7f4b190431791a6',
  '5be9bd11c7f4b190431791a7',
  '5be9bd11c7f4b190431791a8'
];

// const supportData = [
//   {
//     _id: supportIds[0],
//     from: userIds[2],
//     to: userIds[0],
//     amount: 3
//   },
//   {
//     _id: supportIds[1],
//     from: userIds[2],
//     to: userIds[1],
//     amount: 11
//   }
// ];

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
      goal: 10,
      comments: [
        {
          commentBy: userIds[1],
          text: 'Good luck 👍'
        }, {
          commentBy: userIds[2],
          text: 'Wow sounds great, you can do this.'
        }
      ]
    },
    {
      createdBy: userIds[1],
      title: 'Born to be a Peformer',
      from: 'Plumber',
      to: 'Performer',
      goal: 20,
      comments: [
        {
          commentBy: userIds[0],
          text: 'Are you sure??🙀'
        }, {
          commentBy: userIds[2],
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
      mongoose.connection.close();
    })
    .catch(err => console.log(err));
    // .finally(() => mongoose.connection.close());
});
