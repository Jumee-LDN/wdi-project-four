/* global describe,it */
import React from 'react';
// import axios from 'axios';
// import sinon from 'sinon';
import { shallow} from 'enzyme';
import { expect } from 'chai';
import IndexTemplateA from '../../../src/components/projects/IndexTemplateA';

const testData = [
  {
    id: 1234,
    createdBy: {id: '5be9860fcb16d525543ceda2'},
    title: 'testing project',
    from: 'slave',
    to: 'master',
    goal: 10,
    story: 'this is my test story',
    comments: [{id: '23456'}],
    supports: [{id: '34567'}],
    totalSupport: 0,
    remainder: 5
  }
];

describe('Project', () => {
  it('should show the correct project',  done => {
    const component = shallow(<IndexTemplateA product={testData}/>);
    expect(component.find('comments').length).to.eq(1);
    // expect(component.find('img').props().src).to.eq(testData.images[0]);
    console.log(component.debug());
    done();
  });
});
