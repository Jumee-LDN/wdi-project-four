import React from 'react';
import axios from 'axios';
import ShowTemplate from './ShowTemplate';

export default class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ project: res.data });
        console.log('We have', this.state.project);
      });
  }


  render() {
    const project = this.state.project;
    return (
      <section>
        {project
          ?
          <div>
            <ShowTemplate key={project._id} project={project}/>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
