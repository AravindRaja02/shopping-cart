import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import './App.css';
import Form from './components/Form';

import Login from './components/Login';
import Cauroselpage from './components/Cauroselpage';
import wel from './components/wel';


import Errors from './components/Errors';
import main from './components/main';
import cart from './components/cart.png';
import background from'./components/background.jpg';
import welcome from './components/img-folder/welcome.jpg';

class App extends Component {
  handleRegister=(e)=>{
    e.preventDefault();
    history.push("/login");
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shopping Cart
          <img className ='cart' src = {cart} alt=""/>
         
          <button type="submit" className="btnn btn-primary button-click"  onClick={(e)=>this.handleRegister(e)}>Login</button>
          </h1>
        </header>
        <Router history={history}>
          <Switch>
          
            <Route path="/" component={wel} exact />
            <Route path="/Form" component={Form} exact/>

            <Route path="/login" component={Login} exact/>
            <Route path="/cauroselpage" component={Cauroselpage} exact/>
            
            
            <Route path="/main" component={main} exact />
            <Route component={Errors} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
