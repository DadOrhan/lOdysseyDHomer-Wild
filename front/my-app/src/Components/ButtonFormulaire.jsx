import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  
  function ButtonFormulaire(props) {
    const { classes } = props;
    return (
      <Button type="submit" variant="raised" color="inherit" className={classes.button}>
        Submit
      </Button>

    );
}

ButtonFormulaire.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonFormulaire);
