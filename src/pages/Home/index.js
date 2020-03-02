import React, { useEffect } from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import { actionCreator } from "./store";

class Home extends React.Component {
  queryList() {
    const { newsList } = this.props;
    return newsList.map(item => <div key={item.id}>{item.title}</div>);
  }

  render() {
    return (
      <div>
        <Header />
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
      this.props.getHomeList(false)
    }
  }
}

Home.loadData = store => {
  // 服务器端渲染之前把数据提前加载好
  return store.dispatch(actionCreator.getHomeList(true));
};

const mapStateToProps = state => ({
  name: state.home.name,
  newsList: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList(server) {
    dispatch(actionCreator.getHomeList(server));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
