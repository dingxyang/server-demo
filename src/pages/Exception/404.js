/*
 * @Author: Yang
 * @Date: 2020-03-03 21:54:27
 * @LastEditors: Yang
 * @LastEditTime: 2020-03-04 20:11:47
 * @Descripttion:
 * @FilePath: /server-demo/src/pages/Exception/404.js
 */
import React, {Component} from "react";

class NotFound extends Component {

  componentWillMount() {
    const {staticContext} = this.props;
    if(staticContext) {
      staticContext.NOT_FOUND = true
    }
  }

  render() {
    return <div>404</div>;
  }

}
export default NotFound;
