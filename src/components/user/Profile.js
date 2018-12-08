import React from 'react';
import axios from 'axios';
import ProfileTemplate from './ProfileTemplate';
import { onlyUnique } from '../../lib/common';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onlyUnique = onlyUnique.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ user: res.data });
      });
  }

  render() {
    const user = this.state.user;
    console.log('user is: ', user);
    return (
      <section>
        { user
          ?
          <ProfileTemplate
            user={user}
            onlyUnique={this.onlyUnique}
          />
          :
          <p>Please log in</p>
        }
      </section>
    );
  }
}
export default Profile;
