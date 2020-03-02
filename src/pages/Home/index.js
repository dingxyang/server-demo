import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";

const Home = ({ name }) => {
  return (
    <div>
      <Header />
      <p>This is {name}</p>
      <button
        onClick={() => {
          alert("click");
        }}
      >
        click
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: state.name
});

export default connect(mapStateToProps)(Home);
