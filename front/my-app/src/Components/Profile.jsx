import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';





 class Profile extends Component {
     constructor(props) {
         super(props);
         this.state  = {
            profile: {
                email:  "homer.simpson@wildcodeschool.fr",
                name:  "Homer",
                lastname:  "Simpson"
            }}}

     render() { 
        return ( 
        <div>
            <h1>My Profile</h1>
        <List>
            <ListItem>
            <ListItemText primary={this.state.profile.email} secondary="my email"/>
            </ListItem>
            <ListItem>
            <ListItemText primary={this.state.profile.name} secondary="my name"/>
            </ListItem>
            <ListItem>
            <ListItemText primary={this.state.profile.lastname} secondary="my lastname "/>
            </ListItem>
            <NavLink className="NavBar" to="/SignIn">
            <Button variant="raised" color="inherit"> Deconnexion </Button>
            </NavLink>
        </List>
        </div>
        
         );
    }
}
 
  
 export  default Profile ;
  


