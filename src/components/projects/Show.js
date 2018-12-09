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
    axios.post(`/api/projects/${this.props.match.params.id}/comments`, {
      text: this.state.text
    }, authorizationHeader())
      .then(result => {
        this.setState({
          project: result.data
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
            <div className="project-main">
              <ProjectDiscription
                project={project}
              />
            </div>
            <div>
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
              />
            </div>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
