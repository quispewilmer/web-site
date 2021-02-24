import logo from './logo.svg';
import './App.css';
import './App.css'
import React from 'react';
import ReactDOM from 'react';
import Menu from './Menu';
import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Servicios from './Servicios';
import Contactenos from './Contactenos';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Inicio}/>
            <Route path="/nosotros" component={Nosotros}/>
            <Route path="/servicios" component={Servicios}/>
            <Route path="/contactenos" component={Contactenos}/>
          </Switch>
        </div>
        <div className="main-container">
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
