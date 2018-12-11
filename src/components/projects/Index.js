import React from 'react';
import axios from 'axios';
import IndexTemplate from './IndexTemplate';
import { titling } from '../../lib/common';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.titling = titling.bind(this);
  }

  componentDidMount() {
    axios.get('/api/projects')
      .then(result => this.setState({ projects: result.data }));
  }

  render() {
    return (
      <section className="index-section">
        <div className="title-section">
          <div>
            <h3>All Projects</h3>
          </div>
        </div>
        <div className="project-list-container">
          {this.state.projects && this.state.projects.map(
            project => <IndexTemplate
              key={project._id}
              project={project}
              titling={this.titling}
            />
          )}
        </div>
      </section>
    );
  }
}
export default ProjectIndex;
