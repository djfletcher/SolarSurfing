import React from 'react';
import { Link } from 'react-router';
import { omit } from 'lodash';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, username: "", password: "" };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
    const user = omit(this.state, ['showModal']);
    this.props.login(user).then(() => this.closeModal());
  }

  renderErrors() {
    if (this.props.errors.responseJSON) {
      const errors = this.props.errors.responseJSON.map((err, idx) => (
        <li key={idx}>{err}</li>
      ));
      return errors;
    }
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

//   render() {
//     return(
//       <button onClick={ this.openModal }>Log In</button>
//
//       <Modal show={ this.state.showModal } onHide={ this.closeModal }>
//         <Modal.Title>
//
//         </Modal.Title>
//
//         <Modal.Body>
//
//         </Modal.Body>
//       </Modal>
//
//
//       <form onSubmit={this.handleSubmit}>
//         <h1>Log In</h1>
//         <aside>
//           Don't have an account?
//           <Link to="/">Join</Link>
//         </aside>
//         <ul>{this.renderErrors()}</ul>
//         <label>Username:
//           <input
//             type="text"
//             value={this.state.username}
//             onChange={this.update("username")}
//           />
//         <br />
//         </label>
//         <label>Password:
//           <input
//             type="password"
//             value={this.state.password}
//             onChange={this.update("password")}
//           />
//         </label>
//         <br />
//         <input type="submit" value="Log In" />
//       </form>
//     );
//   }
// }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>Log In</h1>
        <aside>
          Don't have an account?
          <Link to="/">Join</Link>
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