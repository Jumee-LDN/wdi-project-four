/* global describe,it */
import React from 'react';
import axios from 'axios';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ProjectIndex from '../../../src/components/projects/Index';

const testData = [
  {
    _id: 1234,
    createdBy: {_id: '5be9860fcb16d525543ceda2'},
    title: 'testing project',
    from: 'slave',
    to: 'master',
    goal: 10,
    story: 'this is my test story',
    comments: [{_id: '23456'}],
    supports: [{_id: '34567'}],
    totalSupport: 0,
    remainder: 5
  },
  {
    _id: 2345,
    createdBy: {_id: '5be9860fcb16d525543ceda2'},
    title: 'testing project',
    from: 'slave',
    to: 'master',
    goal: 10,
    story: 'this is my test story',
    comments: [{_id: '45678'}],
    supports: [{_id: '67895'}],
    totalSupport: 0,
    remainder: 5
  }
];

sinon.stub(axios, 'get')
  .returns(Promise.resolve({ data: testData }));
