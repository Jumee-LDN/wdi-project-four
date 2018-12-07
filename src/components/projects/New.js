import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';
import ProjectForm from './ProjectForm';

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
    axios.post('/api/projects', this.state)
      .then(() => this.props.history.push('/projects'));
  }

  render() {
    return(
      <section>
        <h2 className="title is-2">Add Your Project</h2>
        <ProjectForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </section>
    );
  }
}
