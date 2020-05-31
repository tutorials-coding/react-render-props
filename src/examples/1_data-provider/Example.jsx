import React from "react";

import { DataProvider } from "./DataProvider";
import { Posts } from "./Posts/Posts";
import "./Example.css";

const getPosts = "https://jsonplaceholder.typicode.com/posts";

export const Example = () => {
  return (
    <div className="example__container">
      <div className="example__content">
        <DataProvider
          url={getPosts}
          renderContent={(data) => <Posts posts={data} />}
        />
      </div>
    </div>
  );
};
