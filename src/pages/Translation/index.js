import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { Redirect } from "react-router-dom";

class Translation extends React.Component {
  queryList() {
    const { tanslationsList } = this.props;
    console.log(tanslationsList);
    return tanslationsList.map((item, index) => (
      <div key={index}>{item.title}</div>
    ));
  }

  render() {
    const { login } = this.props;
    return login ? (
      <div>
        translation
        {this.queryList()}
      </div>
    ) : (
      <Redirect to="/"></Redirect>
    );
  }

  componentDidMount() {
    if (!this.props.tanslationsList.length) {
      this.props.getTranslationList();
    }
  }
}

Translation.loadData = store => {
  return store.dispatch(actionCreator.getTranslationList());
};

const mapStateToProps = state => ({
  tanslationsList: state.tanslations.tanslationsList,
  login: state.header.login
});

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(actionCreator.getTranslationList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Translation);
