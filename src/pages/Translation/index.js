import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>翻译界面</title>
          <meta name="description" content="翻译界面"></meta>
        </Helmet>
        <div>
          translation
          {this.queryList()}
        </div>
      </div>
    ) : (
      // 仅限于客户端
      <Redirect to="/"></Redirect>
    );
  }

  componentDidMount() {
    if (!this.props.tanslationsList.length) {
      this.props.getTranslationList();
    }
  }
}

const mapStateToProps = state => ({
  tanslationsList: state.tanslations.tanslationsList,
  login: state.header.login
});

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(actionCreator.getTranslationList());
  }
});

const ExportTranslation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Translation);

ExportTranslation.loadData = store => {
  return store.dispatch(actionCreator.getTranslationList());
};

export default ExportTranslation;
