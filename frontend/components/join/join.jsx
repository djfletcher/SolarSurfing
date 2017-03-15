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
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
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

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = omit(this.state, ['showModal']);
    this.props.signup(user).then(() => this.closeModal());
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
              <p>Already a member?</p>
              <Link to="/">Log In</Link>
            </aside>
          </Modal.Header>

          <form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <aside>
                <ul>{this.renderErrors()}</ul>
              </aside>
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
                  value={this.state.image_url}
                  placeholder="paste image url"
                  onChange={this.update("image_url")}
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
              <br/ >
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
              <br />
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" value="Join" />
          </Modal.Footer>
        </form>

        </Modal>
      </div>
    );
  }

  // render() {
  //   return(
  //     <form onSubmit={this.handleSubmit}>
  //       <h1>Join</h1>
  //         <aside>
  //           Already a member?
  //           <Link to="/login">Log In</Link>
  //         </aside>
  //       <ul>{this.renderErrors()}</ul>
  //
  //       <label>Username:
  //         <input
  //           type="text"
  //           value={this.state.username}
  //           onChange={this.update("username")}
  //         />
  //       </label>
  //
  //       <br />
  //
  //       <label>Password:
  //         <input
  //           type="password"
  //           value={this.state.password}
  //           onChange={this.update("password")}
  //         />
  //       </label>
  //
  //       <br />
  //
  //       <label>Profile picture:
  //         <input
  //           type="text"
  //           value={this.state.image_url}
  //           placeholder="paste image url"
  //           onChange={this.update("image_url")}
  //         />
  //       </label>
  //
  //       <br />
  //
  //       <label>Bio:
  //         <textarea
  //           value={this.state.bio}
  //           placeholder="Describe a bit about yourself"
  //           onChange={this.update("bio")}
  //         />
  //       </label>
  //
  //       <br/ >
  //
  //       <label>Home Planet
  //         <select value={this.state.planet_id} onChange={this.update("planet_id")}>
  //           <option value="1">Mercury</option>
  //           <option value="2">Venus</option>
  //           <option value="3">Earth</option>
  //           <option value="4">Mars</option>
  //           <option value="5">Jupiter</option>
  //           <option value="6">Saturn</option>
  //           <option value="7">Uranus</option>
  //           <option value="8">Neptune</option>
  //         </select>
  //       </label>
  //
  //       <br />
  //
  //       <input type="submit" value="Join" />
  //     </form>
  //   );
  // }
}

export default Join;