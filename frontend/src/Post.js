import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <img className="avatar" src={post.avatar} alt={post.user} />
      <div className="post-content">
        <h2>{post.title}</h2>
        <p className="post-body">{post.content}</p>
        <div className="post-tags">
          <span className="tag">#{post.user.toLowerCase().replace(' ', '')}</span>
          <span className="tag">#{post.title.split(' ')[0]}</span>
          <span className="tag">#dailyupdate</span>
        </div>
        <div className="post-info">
          <span className="user-name">Posted by: {post.user}</span>
          <span className="post-date">{post.date}</span>
        </div>
        <div className="post-reactions">
          <button className="reaction-btn">👍 Like</button>
          <button className="reaction-btn">💬 Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
