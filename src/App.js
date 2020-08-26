import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import * as NotFoundImage from "./images/404.jpg";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.scss';
import LoginPage from './pages/login/login.page';
import Dashboard from './pages/dashboard/dashboard.page';
import { selectActiveUser } from './store/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

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
      main: "#dfdfdf"
    },
    secondary: {
      main: "#000"
    }
  },
});

function App({ activeUser }) {
  return (
    <div className="app-container">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" render={() => {
            return activeUser ? (
              <Redirect to="/" />
            ) : <LoginPage />
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
