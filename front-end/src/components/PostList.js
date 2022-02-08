import React from 'react';
import PostItem from './PostItem';
import '../css/Post.css'

export default function PostList() {
  return (
    <section>
      <div className="post-list">
        <PostItem></PostItem>
      </div>
    </section>
  );
}
