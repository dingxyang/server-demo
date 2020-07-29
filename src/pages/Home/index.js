import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import * as style from "./style.css";
import withStyle from "../../withStyle";
import { Helmet } from "react-helmet";

const mapStateToProps = state => ({
  name: state.home.name,
  newsList: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(actionCreator.getHomeList());
  }
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Home extends React.Component {
  queryList() {
    const { newsList } = this.props;
    return newsList.map(item => <div key={item.id}>{item.title}</div>);
  }

  render() {
    return (
      <div className={style.test}>
        <Helmet>
          <title>My Title</title>
          <meta name="description" content="My Title"></meta>
        </Helmet>
        {this.queryList()}
      </div>
    );
  }

  componentDidMount() {
    if (!this.props.newsList.length) {
      this.props.getHomeList();
    }
  }
}


const ExportHome = withStyle(Home, style);

ExportHome.loadData = store => {
  // 服务器端渲染之前把数据提前加载好
  return store.dispatch(actionCreator.getHomeList());
};

export default ExportHome;
