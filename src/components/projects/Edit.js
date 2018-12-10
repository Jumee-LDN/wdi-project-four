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

  handleEditChange(event) {
    const { target: {name, value} } = event;
    this.setState({ project: { ...this.state.project, [name]: value} });
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log('Project edit submit handled this.state is', this.state);
    axios.put(`/api/projects/${this.props.match.params.id}`, this.state.project, authorizationHeader())
      .then(() => {
        this.props.history.push(`/projects/${this.props.match.params.id}`);
      });
  }

  componentDidMount() {
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(result => {
        this.setState({ project: result.data });
      });
  }

  render() {
    const project = this.state.project;

    return(
      <section className="form-section">
        <h3>Edit Your Project</h3>
        <ProjectEditForm
          handleEditChange = {this.handleEditChange}
          handleSubmit = {this.handleSubmit}
          project = {project}
          {...this.state}
        />
      </section>
    );
  }
}
