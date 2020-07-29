/*
 * @Author: Yang
 * @Date: 2020-03-03 21:54:27
 * @LastEditors  : Yang
 * @LastEditTime : 2020-07-29 18:30:56
 * @Descripttion:
 * @FilePath     : /server-demo/src/pages/Exception/404.js
 */
import React, { Component } from "react";
import { connect } from "react-redux";

@connect()
class NotFound extends Component {
  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.NOT_FOUND = true;
    }
  }

  render() {
    console.log('测试装饰器', this.props)
    return <div>404</div>;
  }
}
export default NotFound;
