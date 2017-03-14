import React from 'react';
import { Link } from 'react-router';

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      imageUrl: "",
      bio: "",
      planetId: 3
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update (field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  renderErrors() {
    if (this.props.errors.responseJSON) {
      const errors = this.props.errors.responseJSON.map((err, idx) => (
        <li key={idx}>{err}</li>
      ));
      return errors;
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>Please Sign Up or <Link to="/login">Log In</Link> instead</h2>
        <ul>{this.renderErrors()}</ul>

        <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
        </label>

        <br />

        <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
        </label>

        <br />

        <label>Profile picture:
          <input
            type="text"
            value={this.state.imageUrl}
            placeholder="paste image url"
            onChange={this.update("imageUrl")}
          />
        </label>

        <br />

        <label>Bio:
          <textarea
            value={this.state.bio}
            placeholder="Describe a bit about yourself"
            onChange={this.update("bio")}
          />
        </label>

        <select value={this.state.planetId} onChange={this.update("planetId")}>
          <option value="1">Mercury</option>
          <option value="2">Venus</option>
          <option value="3">Earth</option>
          <option value="4">Mars</option>
          <option value="5">Jupiter</option>
          <option value="6">Saturn</option>
          <option value="7">Uranus</option>
          <option value="8">Neptune</option>
        </select>

        <br />

        <input type="submit" value="Join" />
      </form>
    );
  }
}

export default Join;
