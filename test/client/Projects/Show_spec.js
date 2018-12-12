// /* global describe,it */
// import React from 'react';
// import axios from 'axios';
// import sinon from 'sinon';
// import { shallow, mount } from 'enzyme';
// import { expect } from 'chai';
// import ProjectShow from '../../../src/components/projects/Show';
//
// const testData = {
//   _id: 1234,
//   createdBy: {_id: '5be9860fcb16d525543ceda2'},
//   title: 'testing project',
//   from: 'slave',
//   to: 'master',
//   goal: 10,
//   story: 'this is my test story',
//   comments: [{_id: '2345'}],
//   supports: [{_id: '3456'}],
//   totalSupport: 0,
//   remainder: 5
// };

// const match = {
//   params: {
//     id: 1234
//   }
// };
//
//
// sinon.stub(axios, 'get')
//   .returns(Promise.resolve({ data: testData }));
//
// describe('ProjectShow', () => {
//   it('should show the project title', done => {
//     const component = mount(<ProjectShow match={match}/>);
//
//     component.setState({ project: testData });
//     // NOTE: We can console.log the HTML our browser has produced from the component!
//     console.log('component.html() is', component.html());
//     // We can now write our assertions. These must all be true
//     // for the test case to pass.
//     expect(component.find('h2').text()).to.eq(testData.title);
//     done();
//   });
//
//
// });
