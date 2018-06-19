// React
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// Components
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Profile from './Components/Profile';
import NavBar from './Components/navbar/NavBar';



class App extends Component {

  state={
    fields: {},
  };

  onSubmit = (fields) => {
    this.setState({ fields });
    console.log('App comp got:', fields);
  };

  render() {
    return (
        <div>
        <NavBar />
        <MuiThemeProvider  >
    <Grid  container
    alignItems='center'
    style={{ height:  '100%' }}
    spacing={24}>
        <Grid  item  xs={12}>
            <Paper
            elevation={4}
            style={{ margin:  32 }}
            >
                <Grid  container
                alignItems='center'
                justify='center'>
                    <Grid item  xs={12}  sm={6}
                          style={{ 'text-align':  'center' }}>
                           <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="KarimBenzema" />                  
                    </Grid>
                    <Grid  item  xs={12}  sm={6}>  
                    
                        <Switch>
                          <Route exact path="/" component={SignIn} />
                          <Route path="/SignIn" component={SignIn} />
                          <Route path="/SignUp" component={SignUp} />
                          <Route path="/Profile" component={Profile} />                          
                        </Switch>
                    
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
</MuiThemeProvider>

        <p>
        {JSON.stringify(this.state.fields,null,2)}
        </p>
      </div>
    );
  }
}

export default App;