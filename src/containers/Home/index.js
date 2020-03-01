/*
 * @Author: Yang
 * @Date: 2020-03-01 14:40:34
 * @LastEditors: Yang
 * @LastEditTime: 2020-03-01 16:18:58
 * @Descripttion:
 * @FilePath: /server-demo/src/containers/Home/index.js
 */
import React from "react";

// 同构

const Home = () => {
  return (
    <div>
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
