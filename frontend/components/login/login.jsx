import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
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
    this.props.login(user);
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
        <h1>Log In</h1>
        <aside>
          Don't have an account?
          <Link to="/join">Join</Link>
        </aside>
        <ul>{this.renderErrors()}</ul>
        <label>Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
        <br />
        </label>
        <label>Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
        </label>
        <br />
        <input type="submit" value="Log In" />
      </form>
    );
  }
}

export default Login;
