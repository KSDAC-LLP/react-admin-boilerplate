import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./style.scss";
import { selectActiveUser } from "../../store/user/user.selectors";
import { logout } from "../../store/user/user.actions";



const Header = ({ activeUser, logout }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      LOGO HERE
    </Link>
    <div className="options">
      <Link className="option" to="/home">
        SHOP
      </Link>
      {activeUser ? (
        <div className="option" onClick={() => logout()}>
          SIGN OUT
        </div>
      ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  logout: itemId => dispatch(logout(itemId, true))
});

const mapStateToProps = createStructuredSelector({
  activeUser: selectActiveUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);