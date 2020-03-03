import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreator } from "../Header/store";
class Header extends React.Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props;

    return (
      <div>
        <Link to="/"> 首页 </Link> <br />
        {login ? (
          <Fragment>
            <div to="/login"> 翻译列表 </div>
            <br />
            <div onClick={handleLogout}> 退出 </div>
          </Fragment>
        ) : (
          <div to="/login" onClick={handleLogin}>
            登录
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => ({
  login: state.header.login
});

const mapDispatch = dispatch => ({
  handleLogin() {
    dispatch(actionCreator.login());
  },
  handleLogout() {
    dispatch(actionCreator.loginout());
  }
});

export default connect(mapState, mapDispatch)(Header);
