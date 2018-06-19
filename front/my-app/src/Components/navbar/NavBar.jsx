import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};



const SignIn = (props) => <Link to="/" {...props} />;
const SignUp = (props) => <Link to="/SignUp" {...props} />;
const Profile = (props) => <Link to="/Profile" {...props} />;



function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            L'Odyssey d'Homer
          </Typography>
          <Button color="inherit" component={SignIn}>Sign In</Button>
          <Button color="inherit" component={SignUp}>Sign Up</Button>
          <Button color="inherit" component={Profile}>Profile</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(NavBar);
