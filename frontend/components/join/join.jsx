import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import { omit } from 'lodash';

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      username: "",
      password: "",
      image_url: "",
      bio: "",
      planet_id: 3
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const user = omit(this.state, ['showModal']);
    this.props.signup(user)
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
      <div>
        <button onClick={ this.openModal }>Join</button>

        <Modal show={ this.state.showModal } onHide={ this.closeModal }>
          <Modal.Header>
            <Modal.Title>Join</Modal.Title>
            <aside>
              <p>Already a member? <Link to="/">Log In</Link></p>
            </aside>
          </Modal.Header>

          <form onSubmit={ this.handleSubmit }>
            <Modal.Body>
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
            <Modal.Footer>
              <input type="submit" value="Join" />
            </Modal.Footer>
          </form>

        </Modal>
      </div>
    );
  }
}

export default Join;
