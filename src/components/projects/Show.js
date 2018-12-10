import React from 'react';
import axios from 'axios';
import ProjectDiscription from './ProjectDiscription';
import SupportsTemplate from './SupportsTemplate';
import CommentsTemplate from './CommentsTemplate';
import { handleChange } from '../../lib/common';
import { authorizationHeader, isAuthenticated, tokenUserId } from '../../lib/auth';

export default class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.createComment = this.createComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.createSupport = this.createSupport.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
    this.isAuthenticated = isAuthenticated.bind(this);
    this.tokenUserId = tokenUserId.bind(this);
  }

  createSupport(event) {
    event.preventDefault();
    axios.post(`/api/projects/${this.props.match.params.id}/supports`, this.state, authorizationHeader())
      .then(result => {
        this.setState({
          project: result.data
        });
      }, console.log(this.state));
  }


  createComment(event) {
    event.preventDefault();
    console.log(authorizationHeader());
    axios.post(`/api/projects/${this.props.match.params.id}/comments`,
      this.state, authorizationHeader())
      .then(result => {
        console.log(result);
        this.setState({
          project: result.data,
          text: ''
        }, () => {
          console.log('this is the new state', this.state);
        });
      });
  }

  deleteComment(id) {
    axios.delete(`/api/projects/${this.props.match.params.id}/comments/${id}`,
      authorizationHeader())
      .then((result) => {
        this.setState({
          project: result.data
        });
      });
  }

  deleteProject() {
    axios.delete(`/api/projects/${this.props.match.params.id}`,
      authorizationHeader())
      .then(() => this.props.history.push('/projects'))
      .catch(() => {
        this.props.history.replace('/projects');
      });
  }

  componentDidMount() {
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ project: res.data });
      });
  }


  render() {
    const project = this.state.project;
    return (
      <section className="show-section">
        {project
          ?
          <div>
            <div className="show-discription-container">
              <ProjectDiscription
                project={project}
                deleteProject = {this.deleteProject}
              />

            </div>
            <div className="show-support-container">
              <SupportsTemplate
                project={project}
                handleChange = {this.handleChange}
                createSupport = {this.createSupport}
              />
            </div>
            <div className="comments-container">
              <CommentsTemplate
                handleChange = {this.handleChange}
                createComment = {this.createComment}
                deleteComment = {this.deleteComment}
                isAuthenticated = {this.isAuthenticated}
                tokenUserId = {this.tokenUserId}
                project={project}
                text={this.state.text}
              />
            </div>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
