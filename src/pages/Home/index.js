import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import * as style from  './style.css'
class Home extends React.Component {
  queryList() {
    const { newsList } = this.props;
    return newsList.map(item => <div key={item.id}>{item.title}</div>);
  }

  render() {
    return (
      <div className={style.test}>
        {this.queryList()}
        <div>
          <button onClick={() => {alert("click")}}>
            click
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    if(!this.props.newsList.length) {
      this.props.getHomeList()
    }
  }
}

Home.loadData = store => {
  // 服务器端渲染之前把数据提前加载好
  return store.dispatch(actionCreator.getHomeList());
};

const mapStateToProps = state => ({
  name: state.home.name,
  newsList: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(actionCreator.getHomeList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
