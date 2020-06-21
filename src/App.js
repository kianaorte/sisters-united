import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import createTheme from '@material-ui/core/styles/createMuiTheme';

import Navbar from './components/navbar';
import home from './pages/home';
import events from './pages/events';
import topics from './pages/topics';
import beCreative from './pages/beCreative';
import login from './pages/login';
import signup from './pages/signup';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#fffff",
      dark: "#f50057",
      contrastText: "#ff4081"
    }, secondary: {
      light: "# #FAD651",
      main: "#FAD651",
      dark: "# #FAD651",
      contrastText: "#FAD651"
    }
  }, typography: {
    userNextVariant: true,
  },
  spacing: 4
});

function App() {
  return (
   <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <check/>
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/events" component={events}/>
            <Route exact path="/topics" component={topics}/>
            <Route exact path="/beCreative" component={beCreative}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/signup" component={signup}/>
          </Switch>
        </div>
      </Router>
    </div>
   </MuiThemeProvider>
  );
}

export default App;
