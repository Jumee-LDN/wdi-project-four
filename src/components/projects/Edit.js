import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';
import ProjectEditForm from './ProjectEditForm';
import { authorizationHeader } from '../../lib/auth';

export default class ProjectEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleEditChange({ target: {name, value}}) {
    this.setState({project: { ...this.state.project, [name]: value}});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Project submit handled', this.state);
    axios.put('/api/projects', this.state, authorizationHeader())
      .then(() => this.props.history.push('/projects'));
  }

  render() {
    return(
      <section className="form-section">
        <h3>Add Your Project</h3>
        <ProjectEditForm
          handleEditChange = {this.handleEditChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    );
  }
}
