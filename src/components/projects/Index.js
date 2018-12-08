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
      <section className="section">
        <div className="project-container">
          <div className="columns">
            <div className="column is-full">
              <h3>All projects</h3>
            </div>
          </div>
          <div className="project-list">
            {this.state.projects && this.state.projects.map(
              project => <IndexTemplate key={project._id} project={project}/>
            )}
          </div>
        </div>
      </section>
    );
  }
}
export default ProjectIndex;
