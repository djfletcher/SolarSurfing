// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';
// import { Link } from 'react-router';
// import { omit } from 'lodash';
//
// class Join extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showModal: false,
//       username: "",
//       password: "",
//       image_url: "",
//       bio: "",
//       planet_id: 3
//     };
//
//     this.update = this.update.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.renderErrors = this.renderErrors.bind(this);
//     this.openModal = this.openModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.handleDemoLogin = this.handleDemoLogin.bind(this);
//     // this.handleToggle = this.handleToggle.bind(this);
//   }
//   //
//   // componentDidUpdate() {
//   //   this.redirectIfLoggedIn();
//   // }
//   //
//   // redirectIfLoggedIn() {
//   //   if (this.props.loggedIn) {
//   //     this.props.router.push("/");
//   //   }
//   // }
//
//   componentWillUnmount() {
//     this.closeModal();
//   }
//
//   update(field) {
//     return (e) => {
//       e.preventDefault();
//       this.setState({ [field]: e.target.value });
//     };
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const user = omit(this.state, ['showModal']);
//     this.props.signup(user)
//       .then(() => this.props.router.push("dashboard"));
//   }
//
//   renderErrors() {
//     if (this.props.errors.responseJSON) {
//       const errors = this.props.errors.responseJSON.map((err, idx) => (
//         <li key={idx}>{err}</li>
//       ));
//       return <ul className="form-errors">{ errors }</ul>;
//     }
//   }
//
//   openModal() {
//     this.setState({ showModal: true });
//   }
//
//   closeModal() {
//     this.setState({ showModal: false });
//   }
//
//   handleDemoLogin() {
//     return this.props.demoLogin()
//       .then(() => this.props.router.push("dashboard"));
//   }
//
//   // handleToggle() {
//   //   // debugger;
//   //   this.closeModal();
//   //   this.props.toggleModal("join");
//   // }
//
//   // componentWillReceiveProps({ showModal }) {
//   //   this.setState({ showModal });
//   // }
//
//   render() {
//     return(
//       <div className="join">
//         <Button
//           className="join open-modal-button"
//           onClick={ this.openModal }
//           bsStyle="primary"
//         >
//           Join
//         </Button>
//
//         <Modal
//           className="join modal"
//           bsSize="small"
//           show={ this.state.showModal }
//           onHide={ this.closeModal }
//           onExited={ this.props.clearErrors }
//         >
//           <Modal.Header className="join">
//             <Modal.Title className="join">
//               Join SolarSurfing for free!
//             </Modal.Title>
//           </Modal.Header>
//
//           <form className="join modal-form" onSubmit={ this.handleSubmit }>
//             <Modal.Body className="join">
//               { this.renderErrors() }
//               <input
//                 type="text"
//                 value={ this.state.username }
//                 placeholder='Username'
//                 onChange={ this.update("username") }
//               />
//               <input
//                 type="password"
//                 value={ this.state.password }
//                 placeholder='Password'
//                 onChange={ this.update("password") }
//               />
//               <input
//                 type="text"
//                 value={ this.state.image_url }
//                 placeholder="Paste profile picture url"
//                 onChange={ this.update("image_url") }
//               />
//               <textarea
//                 value={this.state.bio}
//                 placeholder="Tell other travelers about yourself"
//                 onChange={this.update("bio")}
//               />
//               <label>Home Planet
//                 <select value={this.state.planet_id} onChange={this.update("planet_id")}>
//                   <option value="1">Mercury</option>
//                   <option value="2">Venus</option>
//                   <option value="3">Earth</option>
//                   <option value="4">Mars</option>
//                   <option value="5">Jupiter</option>
//                   <option value="6">Saturn</option>
//                   <option value="7">Uranus</option>
//                   <option value="8">Neptune</option>
//                 </select>
//               </label>
//             </Modal.Body>
//             <Modal.Footer>
//               <ul>
//                 <li><Button type="submit" bsStyle="primary">Join</Button></li>
//                 <li><Button onClick={ this.handleDemoLogin } bsStyle="primary">Demo</Button></li>
//               </ul>
//             </Modal.Footer>
//           </form>
//
//         </Modal>
//       </div>
//     );
//   }
// }
//
// export default Join;






import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { omit } from 'lodash';

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal,
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
      return <ul className="form-errors">{ errors }</ul>;
    }
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
    this.props.toggleModal();
  }

  handleToggle() {
    // debugger;
    this.closeModal();
    this.props.toggleModal("join");
  }

  componentWillReceiveProps({ showModal }) {
    this.setState({ showModal });
  }

  render() {
    return(
      <div className="join">
        <Button
          className="join open-modal-button"
          onClick={ this.openModal }
          bsStyle="primary"
        >
          Join
        </Button>

        <Modal
          className="join modal"
          bsSize="small"
          show={ this.state.showModal }
          onHide={ this.closeModal }
          onExited={ this.props.clearErrors }
        >
          <Modal.Header className="join">
            <Modal.Title className="join">
              Join SolarSurfing for free!
            </Modal.Title>
          </Modal.Header>

          <form className="join modal-form" onSubmit={ this.handleSubmit }>
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
                <li><Button onClick={ this.handleToggle } bsStyle="primary">Log In</Button></li>
              </ul>
            </Modal.Footer>
          </form>

        </Modal>
      </div>
    );
  }
}

export default Join;
