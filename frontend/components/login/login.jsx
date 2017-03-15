import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';
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
    this.props.login(user)
      .then(() => this.closeModal())
      .then(() => this.props.router.push("dashboard"));
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

  render() {
    return(
      <div className="login-container">
        <button className="login open-modal-button" onClick={ this.openModal }>Log In</button>

        <Modal
          className="login modal"
          show={ this.state.showModal }
          onHide={ this.closeModal }
        >
          <Modal.Header className="login modal-header">
            <Modal.Title className="login modal-title">
              Log in to SolarSurfing
            </Modal.Title>

          </Modal.Header>

          <form className="login modal-form" onSubmit={ this.handleSubmit }>
            <Modal.Body className="login modal-body">
              <ul>{ this.renderErrors() }</ul>
              <input
                type="text"
                value={ this.state.username }
                placeholder='Username'
                onChange={ this.update("username") }
              />
              <input
                type="password"
                value={ this.state.password }
                placeholder='Password'
                onChange={ this.update("password") }
              />
            </Modal.Body>
            <Modal.Footer className="login modal-footer">
              <input type="submit" value="Log In" />
              <aside>
                <p>Don't have an account? <Link to="/">Join</Link></p>
              </aside>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Login;
