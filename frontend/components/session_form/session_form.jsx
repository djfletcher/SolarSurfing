import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { omit } from 'lodash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showJoin: false,
      username: "",
      password: "",
      image_url: "",
      bio: "",
      planet_id: 3
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  //
  // componentDidUpdate() {
  //   this.redirectIfLoggedIn();
  // }
  //
  // redirectIfLoggedIn() {
  //   if (this.props.loggedIn) {
  //     this.props.router.push("/");
  //   }
  // }

  componentWillUnmount() {
    this.closeModal();
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(formType) {
    return e => {
      e.preventDefault();
      let action;
      let user;
      if (formType === "login") {
        action = this.props.login;
        user = ({ username: this.state.username, password: this.state.password });
      } else if (formType === "join") {
        action = this.props.signup;
        user = omit(this.state, ['showLogin'], ['showJoin']);
      }
      action(user).then(() => this.props.router.push("dashboard"));
    };
  }

  handleDemoLogin() {
    return this.props.demoLogin()
      .then(() => this.props.router.push("dashboard"));
  }

  renderErrors() {
    if (this.props.errors.responseJSON) {
      const errors = this.props.errors.responseJSON.map((err, idx) => (
        <li key={idx}>{err}</li>
      ));
      return <ul className="form-errors">{ errors }</ul>;
    }
  }

  openModal(formType) {
    if (formType === "login") {
      this.setState({ showLogin: true });
    } else if (formType === "join") {
      this.setState({ showJoin: true });
    }
  }

  closeModal(formType) {
    if (formType === "login") {
      this.setState({ showLogin: false });
    } else if (formType === "join") {
      this.setState({ showJoin: false });
    } else {
      this.setState({ showLogin: false, showJoin: false });
    }
  }

  handleToggle(formType) {
    const toggle = otherFormType => {
      this.closeModal(formType);
      this.openModal(otherFormType);
    };
    if (formType === "login") {
      return toggle("join");
    } else if (formType === "join") {
      return toggle("login");
    }
  }

  render() {
    const joinModal = (
      <Modal
        className="join modal"
        bsSize="small"
        show={ this.state.showJoin }
        onHide={ () => this.closeModal("join") }
        onExited={ this.props.clearErrors }
      >
        <Modal.Header className="join">
          <Modal.Title className="join">
            Join SolarSurfing for free!
          </Modal.Title>
        </Modal.Header>

        <form className="join modal-form" onSubmit={ this.handleSubmit("join") }>
          <Modal.Body className="join">
            { this.renderErrors() }
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
            <input
              type="text"
              value={ this.state.image_url }
              placeholder="Paste profile picture url"
              onChange={ this.update("image_url") }
            />
            <textarea
              value={this.state.bio}
              placeholder="Tell other travelers about yourself"
              onChange={this.update("bio")}
            />
            <label>Home Planet
              <select value={this.state.planet_id} onChange={this.update("planet_id")}>
                <option value="1">Mercury</option>
                <option value="2">Venus</option>
                <option value="3">Earth</option>
                <option value="4">Mars</option>
                <option value="5">Jupiter</option>
                <option value="6">Saturn</option>
                <option value="7">Uranus</option>
                <option value="8">Neptune</option>
              </select>
            </label>
          </Modal.Body>
          <Modal.Footer className="join">
            <ul>
              <li><Button type="submit" bsStyle="primary">Join</Button></li>
              <li className="words">or</li>
              <li><Button onClick={ this.handleDemoLogin } bsStyle="primary">Demo</Button></li>
              <li className="words">Already have an account?</li>
              <li><Button onClick={ () => this.handleToggle("join") } bsStyle="primary">Log In</Button></li>
            </ul>
          </Modal.Footer>
        </form>

      </Modal>
    );

    const loginModal = (
      <Modal
        className="login modal"
        bsSize="small"
        show={ this.state.showLogin }
        onHide={ () => this.closeModal("login") }
        onExited={ this.props.clearErrors }
      >
        <Modal.Header className="login">
          <Modal.Title className="login">
            Log in to SolarSurfing
          </Modal.Title>
        </Modal.Header>

        <form className="login modal-form" onSubmit={ this.handleSubmit("login") }>
          <Modal.Body className="login">
            { this.renderErrors() }
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
          <Modal.Footer className="login">
            <ul>
              <li><Button type="submit" bsStyle="primary">Log In</Button></li>
              <li className="words">Don't have an account?</li>
              <li><Button onClick={ this.handleDemoLogin } bsStyle="primary">Demo</Button></li>
              <li className="words">or</li>
              <li><Button onClick={ () => this.handleToggle("login") } bsStyle="primary">Join</Button></li>
            </ul>
          </Modal.Footer>
        </form>
      </Modal>
    );


    return(
      <div className="session-form">
        <div className="header-buttons">
          <Button
            className="login open-modal-button"
            onClick={ () => this.openModal("login") }
            bsStyle="primary"
          >
            Log In
          </Button>
          <Button
            className="join open-modal-button"
            onClick={ () => this.openModal("join") }
            bsStyle="primary"
          >
            Join
          </Button>
          <Button
            onClick={ this.handleDemoLogin }
            bsStyle="primary"
            >Demo
          </Button>
        </div>
        { joinModal }
        { loginModal }
      </div>
    );
  }
}

export default SessionForm;
