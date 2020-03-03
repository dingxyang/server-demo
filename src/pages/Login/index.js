import React from "react";
import {connect}  from 'react-redux'

const Login = () => {
  return (
    <div>
      <p>Login</p>
    </div>
  );
};

const mapStateToProps = (state) =>({
  login:state.login.login
})
export default connect(mapStateToProps)(Login);
