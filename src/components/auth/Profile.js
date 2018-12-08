import React from 'react';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <h1 className="title">Username goes here</h1>
      </section>
    );
  }
}
export default Profile;
