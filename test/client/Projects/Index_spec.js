/* global describe,it */
import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ProjectIndex from '../../../src/components/projects/Index';

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

sinon.stub(axios, 'get')
  .returns(Promise.resolve({ data: testData }));

describe('Products Index', () => {
  it('should show the correct number of projects', done => {
    const component = shallow(<ProjectIndex />);
    component.setState({ filteredProjects: testData });
    expect(component.state()).to.have.property('filteredProjects');
    expect(component.find('IndexTemplateA').length).to.eq(testData.length);
    done();
  });

  it('should have the correct name in each project', done => {
    const component = shallow(<ProjectIndex />);
    component.setState({ filteredProjects: testData });
    component.find('IndexTemplateA').forEach((project, i) => {
      expect(project.props().product.name).to.eq(testData[i].name);
    });
    done();
  });
});
