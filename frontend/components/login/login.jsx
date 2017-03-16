// import React from 'react';
// import { Link } from 'react-router';
// import { Modal, Button } from 'react-bootstrap';
// import { omit } from 'lodash';

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { showModal: false, username: "", password: "" };
//
//     this.update = this.update.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.renderErrors = this.renderErrors.bind(this);
//     this.openModal = this.openModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//     this.handleDemoLogin = this.handleDemoLogin.bind(this);
//     // this.handleToggle = this.handleToggle.bind(this);
//   }
//
//   // componentDidUpdate() {
//   //   this.redirectIfLoggedIn();
//   // }
//   //
//   // redirectIfLoggedIn() {
//   //   if (this.props.loggedIn) {
//   //     this.props.router.push("/dashboard");
//   //   }
//   // }
//
//   componentWillUnmount() {
//     this.closeModal();
//   }
//
//   update (field) {
//     return (e) => {
//       e.preventDefault();
//       this.setState({ [field]: e.target.value });
//     };
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     const user = omit(this.state, ['showModal']);
//     this.props.login(user)
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
//   //   this.props.toggleModal("login");
//   // }
//
//   // componentWillReceiveProps({ showModal }) {
//   //   this.setState({ showModal });
//   // }
//
//   render() {
//     return(
//       <div className="login">
//         <Button
//           className="login open-modal-button"
//           onClick={ this.openModal }
//           bsStyle="primary"
//         >
//           Log In
//         </Button>
//
//         <Modal
//           className="login modal"
//           bsSize="small"
//           show={ this.state.showModal }
//           onHide={ this.closeModal }
//           onExited={ this.props.clearErrors }
//         >
//           <Modal.Header className="login">
//             <Modal.Title className="login">
//               Log in to SolarSurfing
//             </Modal.Title>
//           </Modal.Header>
//
//           <form className="login modal-form" onSubmit={ this.handleSubmit }>
//             <Modal.Body className="login">
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
//             </Modal.Body>
//             <Modal.Footer className="login">
//               <ul>
//                 <li><Button type="submit" bsStyle="primary">Log In</Button></li>
//                 <li><Button onClick={ this.handleDemoLogin } bsStyle="primary">Demo</Button></li>
//               </ul>
//             </Modal.Footer>
//           </form>
//         </Modal>
//       </div>
//     );
//   }
// }
//
// export default Login;



import React from 'react';
import { Link } from 'react-router';
import { Modal, Button } from 'react-bootstrap';
import { omit } from 'lodash';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: props.showModal, username: "", password: "" };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // componentDidUpdate() {
  //   this.redirectIfLoggedIn();
  // }
  //
  // redirectIfLoggedIn() {
  //   if (this.props.loggedIn) {
  //     this.props.router.push("/dashboard");
  //   }
  // }

  componentWillUnmount() {
    this.closeModal();
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
    this.props.toggleModal("login");
  }

  componentWillReceiveProps({ showModal }) {
    this.setState({ showModal });
  }

  render() {
    return(
      <div className="login">
        <Button
          className="login open-modal-button"
          onClick={ this.openModal }
          bsStyle="primary"
        >
          Log In
        </Button>

        <Modal
          className="login modal"
          bsSize="small"
          show={ this.state.showModal }
          onHide={ this.closeModal }
          onExited={ this.props.clearErrors }
        >
          <Modal.Header className="login">
            <Modal.Title className="login">
              Log in to SolarSurfing
            </Modal.Title>
          </Modal.Header>

          <form className="login modal-form" onSubmit={ this.handleSubmit }>
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
                <li><Button onClick={ this.handleToggle } bsStyle="primary">Join</Button></li>
              </ul>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Login;
