import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

import TextField from '@material-ui/core/TextField';
import SnackInscription from './SnackInscription';
import Button from '@material-ui/core/Button';


class SignUp extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        passwordChecker: "" ,
        flash:""    
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      let change = {}
      change[e.target.name] = e.target.value
      this.setState(change)
  }
    handleSubmit(e){
      console.log(this.state);
      e.preventDefault();
      fetch("/auth/signup",
    { 
        method:  'POST',
        headers:  new  Headers({'Content-Type':  'application/json'}),
        body:  JSON.stringify(this.state),
        })
        .then(res  =>  res.json())
        .then(res  =>  this.setState({"flash":  res.flash}), err  =>  this.setState({"flash":  err.flash}))
    }

  
    render() {
      return(
        <div>
          {/* <h1>{JSON.stringify(this.state,1,1)}</h1> */}
          <h1 align='left'>Sign Up!</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField type="text" name="name" label="Name" value={this.state.name} onChange={this.handleChange}/><br/>
            <TextField type="text" name="lastname" label="Lastname" value={this.state.lastname} onChange={this.handleChange}/><br/>
            <TextField type="email" name="email" label="E-mail" value={this.state.email} onChange={this.handleChange}/><br/>
            <TextField require type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange}/><br/>
            <TextField type="password" name="passwordChecker" label="Password Copy" value={this.state.passwordChecker} onChange={this.handleChange}/><br/>
            <br/>
            <NavLink to="/Profile">
            <SnackInscription />
            </NavLink>
            <NavLink to="/SignIn">
            <Button variant="raised" color="inherit">Already registered</Button>
            </NavLink>
          </form>
        </div>
      );
    }
  }

export default SignUp;
