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
        <button
          onClick={() => {
            alert("click");
          }}
        >
          click
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.props.getHomeList();
  }
}

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
