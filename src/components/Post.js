import React from 'react'
import './Post.css'

const Post = ({ user, text, image, likes, comments }) => {
  return (
    <div className="social-media-post">
      {/* User information */}
      <div className="user-info">
        <img src={user.profilePicture} alt={`${user.name}'s profile`} />
        <div>
          <p className="user-name">{user.name}</p>
          <p className="post-time">{user.postTime}</p>
        </div>
      </div>

      {/* Post content */}
      <p className="post-text">{text}</p>
      {image && <img src={image} alt="Post" className="post-image" />}

      {/* Interaction buttons */}
      <div className="interaction-buttons">
        <button className="like-button">{likes} Likes</button>
        <button className="comment-button">{comments} Comments</button>
      </div>
    </div>
  );
};

export default Post