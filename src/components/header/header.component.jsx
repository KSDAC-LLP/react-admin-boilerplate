import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./style.scss";
import { selectActiveUser } from "../../store/user/user.selectors";
import { logout } from "../../store/user/user.actions";
import LogoImg from "../../images/logo.jpg";


const Header = ({ activeUser, logout }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={LogoImg} className="logo" alt="NIAS powered by KSDAC LLP"/>
    </Link>
    <div className="options">
      <div className="option" onClick={() => logout()}>
        SIGN OUT
      </div>
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