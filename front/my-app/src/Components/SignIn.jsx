import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonFormulaire from './ButtonFormulaire';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        email: "",
        password: "",
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
        fetch("/auth/signin",
      { 
          method:  'POST',
          headers:  new  Headers({'Content-Type':  'application/json'}),
          body:  JSON.stringify(this.state),
          })
          .then(res  =>  res.json())
          .then(res  =>  this.setState({"flash":  res.flash}), err  =>  this.setState({"flash":  err.flash}))
      }

    render() { 
        return ( 
            <div>
                <h1 align='left'>Sign In !</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField type="email" name="email" label="E-mail" value={this.state.email} onChange={this.handleChange}/><br/>
                    <TextField require type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange}/><br/>
                    <ButtonFormulaire />
                    <NavLink to="/SignUp">
                    <Button variant="raised" color="inherit">Not registered</Button>
                    </NavLink>
                </form>
            </div>
         );

    }
}
 
export default SignIn;