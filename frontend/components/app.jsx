import React from 'react';
import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';

const App = ({ children }) => (
  <div className="app">
    <HeaderContainer />
    { children }
    <FooterContainer />
  </div>
);

export default App;

//
// const App = ({ children }) => (
//
//   const toggleModal = () => {
//     this.setState({modalOpen: !this.state.modalOpen})
//   };
//
//   <div className="app">
//     <HeaderContainer
//       onClickLogin={toggleModal}
//       />
//     <SessionFormContainer
//       open={this.state.modalOpen}
//       />
//     { children }
//     <FooterContainer />
//   </div>
// );
//
// export default App;
