import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.scss';
import Footer from "./components/footer/footer.component";
import * as NotFoundImage from "./images/404.jpg";
import Dashboard from './pages/dashboard/dashboard.page';
import LoginPage from './pages/login/login.page';
import UserManagePage from './pages/user-management/user-management.page';
import { selectActiveUser } from './store/user/user.selectors';

const NotFoundPage = () => (
  <div style={{ textAlign: "center" }}>
    <img
      style={{
        margin: "0 auto",
        maxWidth: "auto",
        height: "400px"
      }}
      src={NotFoundImage}
      alt="Not Found"
    />
    <br />
    <Link to="/">Home</Link>
  </div>
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#486aae"
    },
    secondary: {
      main: "#000000"
    }
  },
});

function App({ activeUser }) {
  return (
    <div className="app-container">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" render={() => {
            return !activeUser ? (
              <Redirect to="/login" />
            ) : <Dashboard />
          }}/>
          <Route exact path="/login" render={() => {
            return activeUser ? (
              <Redirect to="/" />
            ) : <LoginPage />
          }}
          />
          <Route path="/user-manage" render={() => {
            return !activeUser ? (
              <Redirect to="/" />
            ) : <UserManagePage />
          }}
          />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  activeUser: selectActiveUser
});

export default connect(mapStateToProps)(App);
