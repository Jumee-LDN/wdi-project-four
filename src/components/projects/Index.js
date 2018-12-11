import React from 'react';
import axios from 'axios';
import IndexTemplateA from './IndexTemplateA';
import IndexTemplateB from './IndexTemplateB';
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
            <p>Copyline goes here</p>
          </div>

        </div>
        <div className="project-list-section">
          <div className="index-category-title">
            <h3>Current role</h3>
          </div>
          <div className="project-list-container">
            {this.state.projects && this.state.projects.map(
              project => <IndexTemplateA
                key={project._id}
                project={project}
                titling={this.titling}
              />
            )}
          </div>
        </div>
        <div className="project-list-section">
          <div className="index-category-title">
            <h3>Future role</h3>
          </div>
          <div className="project-list-container">
            {this.state.projects && this.state.projects.map(
              project => <IndexTemplateB
                key={project._id}
                project={project}
                titling={this.titling}
              />
            )}
          </div>
        </div>
      </section>
    );
  }
}
export default ProjectIndex;
