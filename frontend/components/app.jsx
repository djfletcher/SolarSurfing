import React from 'react';
import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';

import SessionFormContainer from './session_form/session_form_container';

// const App = ({ children }) => (
//   <div className="app">
//     <HeaderContainer />
//     { children }
//     <FooterContainer />
//   </div>
// );
//
// export default App;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showLogin: false, showJoin: false };
    // debugger;
    // this.toggleModal = this.toggleModal.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
    this.openJoin = this.openJoin.bind(this);
    this.closeJoin = this.closeJoin.bind(this);
    this.closeBoth = this.closeBoth.bind(this);
  }
  //
  // toggleModals() {
  //   this.setState({
  //     showJoin: !this.state.showJoin
  //   });
  // }

  openLogin() {
    if (!this.state.showLogin) {
      this.setState({ showLogin: true });
    }
  }

  closeLogin() {
    if (this.state.showLogin) {
      this.setState({ showLogin: false });
    }
  }

  openJoin() {
    if (!this.state.showJoin) {
      this.setState({ showJoin: true });
    }
  }

  closeJoin() {
    if (this.state.showJoin) {
      this.setState({ showJoin: false });
    }
  }

  closeBoth() {
    if (this.state.showJoin || this.state.showLogin) {
      this.setState({ showLogin: false, showJoin: false });
    }
  }

  render() {
    return(
      <div className="app">
        <HeaderContainer
          openJoin={ this.openJoin }
          openLogin={ this.openLogin } />
        <SessionFormContainer
          showLogin={ this.state.showLogin }
          showJoin={ this.state.showJoin }
          openLogin={ this.openLogin }
          closeLogin={ this.closeLogin }
          openJoin={ this.openJoin }
          closeJoin={ this.closeJoin }
          closeBoth={ this.closeBoth } />
        { this.props.children }
        <FooterContainer />
      </div>
    );
  }
}

export default App;
