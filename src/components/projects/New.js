import React from 'react';
import axios from 'axios';
import ProjectForm from './ProjectForm';
import { handleChange } from '../../lib/common';
import { authorizationHeader, isAuthenticated } from '../../lib/auth';

export default class ProjectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Project submit handled', this.state);
    axios.post('/api/projects', this.state, authorizationHeader())
      .then(() => this.props.history.push('/projects'));
  }

  render() {
    return(
      <section className="form-section" id="new-page">
        {!isAuthenticated() &&
          <div className="notice-message">
            <p>Please login to proceed.</p>
          </div>
        }
        <h3>Add Your Project</h3>
        <ProjectForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    );
  }
}
