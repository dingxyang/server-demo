/*
 * @Author: Yang
 * @Date: 2020-03-01 14:40:34
 * @LastEditors: Yang
 * @LastEditTime: 2020-03-01 17:13:45
 * @Descripttion:
 * @FilePath: /server-demo/src/containers/Home/index.js
 */
import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <p>hello esun</p>
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

export default Home;
