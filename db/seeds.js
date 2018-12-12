const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Project = require('../models/project');
const User = require('../models/user');

mongoose.Promise = require('bluebird');

const userIds = [
  '5be9860fcb16d525543ceda1',
  '5be9860fcb16d525543ceda2',
  '5be9860fcb16d525543ceda3',
  '5be9860fcb16d525543ceda4'
];

const userData = [
  {
    _id: userIds[0],
    username: 'Jumee',
    email: 'jumee@jumee',
    password: 'pass',
    passwordConfirmation: 'pass'
  },
  {
    _id: userIds[1],
    username: 'Sean',
    email: 'sean@sean',
    password: 'pass',
    passwordConfirmation: 'pass'
  },
  {
    _id: userIds[2],
    username: 'Dan',
    email: 'dan@dan',
    password: 'pass',
    passwordConfirmation: 'pass'
  },
  {
    _id: userIds[3],
    username: 'Penny',
    email: 'penny@penny',
    password: 'pass',
    passwordConfirmation: 'pass'
  }
];

const projectData = [
  {
    createdBy: userIds[0],
    title: 'I just want to continue doing what I love.',
    from: 'Graphic Designer',
    to: 'Web Developer',
    goal: 800,
    story: `I worked for creative agencies in the film industry in London for
    8 years. As a millennial living in 21st century, I have witnessed so many
    stories being shared and furthermore helping other people’s lives through
    technology.  So I want to be a part of the incredible phenomenon and
    I would like to enrolled a full-stack web development boot camp at General Assembly to
    learn new skills. What do you guys think? Is this a bad idea?`,
    comments: [
      {
        commentBy: userIds[1],
        text: 'You should do it. Good luck 👍'
      }, {
        commentBy: userIds[2],
        text: 'Wow sounds great, you can do this.'
      }
    ]
  },
  {
    createdBy: userIds[1],
    title: 'Tattoooooo!',
    from: 'Product manager',
    to: 'Tattoo artist',
    goal: 250,
    story: `Currently working in the pharmaceutical industry as a product manager.
      I recently got a new tatoo and something clicked inside me.
      It is hard to realise my actual passion is in tatooing while I have a stable and good job now.
      But I truely want to be a tatoo artist as soon as possible. I need your support.
    `,
    comments: [
      {
        commentBy: userIds[0],
        text: 'Are you sure??🙀'
      }, {
        commentBy: userIds[2],
        text: 'As long as you like it.'
      }
    ]
  },
  {
    createdBy: userIds[2],
    title: 'I believe I can fly',
    from: 'Professional Pusher',
    to: 'Ballerina',
    goal: 950,
    story: `Japan is indeed a hardworking nation. It makes sure that all its people
    reach work on time and that's why Japan has employed me to push others onto
    trains so that nobody's late for work. But I hate pushing people
    and I have one dream, to become a ballerina. I want to push my dream not people.`,
    comments: [
      {
        commentBy: userIds[1],
        text: 'Your current role sounds fun though.'
      }, {
        commentBy: userIds[0],
        text: 'Whats the difference? Just not sure.🕺'
      }
    ]
  },
  {
    createdBy: userIds[3],
    title: 'I need to change my job',
    from: 'Wedding Guest',
    to: 'Pet Food Taster',
    goal: 180,
    story: `I love dogs and cats and eating. I'm actually not a people person
    and it's so difficult to be a wdding guest and be friendly. Belive or not,
    there is a course in France I can take to become a professional pet food taster.`,
    comments: [
      {
        commentBy: userIds[2],
        text: 'The market is too small, you should reconsider.'
      }, {
        commentBy: userIds[1],
        text: '🐶'
      }
    ]
  }
];

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => Project.create(projectData))
    .then(projects => {
      console.log(`${projects.length} projects created`);
      return User.create(userData);
    })
    .then(users => {
      console.log(`${users.length} users created`);
      mongoose.connection.close();
    })
    .catch(err => console.log(err));
});
