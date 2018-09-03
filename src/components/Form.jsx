import React, { Component } from 'react';

import '../../src/App.css';
import history from '../history';
import { FormErrors } from './FormErrors.jsx';
import './Form.css';
import '../../src/App';
import welcome from './img-folder/welcome.jpg';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confrmpasswrd:'',
      formErrors: {username: '', password: '',confrmpasswrd:''},
      usernameValid: false,
      passwordValid: false,
      confrmValid:false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    let confrmValid = this.state.confrmValid;

    switch(fieldName) {
      case 'username':
        usernameValid = value.match("aravind");
        fieldValidationErrors.username = usernameValid ? '' : ' Enter UserName : aravind';
        break;
      case 'password':
        passwordValid = value.match("aravind");
        fieldValidationErrors.password = passwordValid ? '': 'Enter password: aravind';
        break;
      case 'confrmpasswrd':
        confrmValid = value.match("aravind");
        fieldValidationErrors.confrmpasswrd = confrmValid ? '': 'confirm password : aravind';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    passwordValid: passwordValid,
                    confrmValid: confrmValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.passwordValid && this.state.confrmValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleRegister=(e)=>{
    e.preventDefault();
    history.push("/login");
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    history.push("/main");
  }

 render () {
   return (

  <form className="demoForm" id="jq">
    <h2 className="heading"></h2>
    <br/>
    <div>
      <FormErrors formErrors={this.state.formErrors} />
    </div>
    <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
      <input type="text" required className="form-control" name="username"
        placeholder="UserName"
        value={this.state.username}
        onChange={this.handleUserInput}  />
    </div><br/>
    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
      <input type="password" className="form-control" name="password"
        placeholder="Password"
        value={this.state.password}
        onChange={this.handleUserInput}  />
    </div><br/>
    <div className={`form-group ${this.errorClass(this.state.formErrors.confrmpasswrd)}`}>
      <input type="password" className="form-control" name="confrmpasswrd"
        placeholder="Confirm Password"
        value={this.state.confrmpasswrd}
        onChange={this.handleUserInput}  />
    </div><br/>
    <button type="submit" className="btn btn-primary button-click" disabled={!this.state.formValid} onClick={(e)=>this.handleSubmit(e)}>Register</button><br/><br/>
    
  </form>
   )
 }
}
export default Form;