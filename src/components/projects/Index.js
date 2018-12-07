import React from 'react';
import axios from 'axios';
import IndexTemplate from './IndexTemplate';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/projects')
      .then(result => this.setState({ projects: result.data }));
  }

  render() {
    return (
      <section>
        <h1 className="title">All projects</h1>
        <hr />
        <div>
          {this.state.projects && this.state.projects.map(
            project => <IndexTemplate key={project._id} project={project}/>
          )}
        </div>
      </section>
    );
  }
}
export default ProjectIndex;
