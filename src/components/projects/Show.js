import React from 'react';
import axios from 'axios';
import ShowTemplate from './ShowTemplate';
import { handleChange } from '../../lib/common';
import { authorizationHeader, decodeToken } from '../../lib/auth';

export default class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.createComment = this.createComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
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
    const tokenUser = decodeToken().sub;
    console.log('tokenUser is', tokenUser);

    this.state.project.comments.forEach(c => {
      if(tokenUser === c.commentBy._id){
        console.log('found the commentCreator!!!', c.commentBy._id);
        axios.delete(`/api/projects/${this.props.match.params.id}/comments/${id}`,
          authorizationHeader())
          .then((result) => {
            this.setState({
              project: result.data
            });
          }
          );
      }
    });

  }

  componentDidMount() {
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ project: res.data }, () => {
          // console.log('componentDidMount', this.state.project);
        });

      });
  }


  render() {
    const project = this.state.project;
    return (
      <section>
        {project
          ?
          <div>
            <ShowTemplate
              handleChange = {this.handleChange}
              createComment = {this.createComment}
              deleteComment={this.deleteComment}
              project={project}
            />
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
