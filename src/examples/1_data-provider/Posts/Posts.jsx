import React from "react";
import Card from "react-bootstrap/Card";

import "./Posts.css";

export const Posts = ({ posts }) => {
  return (
    <div className="posts__container">
      {posts.map((post) => (
        <div className="post__container" key={post.id}>
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};
