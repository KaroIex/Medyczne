import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import Switch from './components/Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
class App extends React.Component {
  state = {
    LOGO: "KLINIKA",
    startPage: "/"
    };

  updateState = () =>
  {
    this.setState({LOGO: "PACJENT", startPage: "/Login"})
  }
  render() { 
    return (
      <Router>
          <Navbar logo={this.state.LOGO} startPage={this.state.startPage}/>
          <Switch render={this.updateState}/>
          <Footer/>
      </Router>
    );
  }
}
 
export default App;

