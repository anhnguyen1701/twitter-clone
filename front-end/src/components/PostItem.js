import React from 'react';

export default function PostItem() {
  return (
    <div className="post-item">
      <p className="post-content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias tempore
        reiciendis, a sequi, reprehenderit rem odit nam deleniti odio voluptas
        nemo maxime, facilis saepe in? Esse magnam doloremque veritatis
        laudantium.
      </p>
      <div className="post-footer">
        <div className="post-infors">
          <span>by AnhNguyen</span>
          <span>Data: 15/11/2020</span>
        </div>
        <div className="post-edit-delete">
          <span>Edit</span>
          <span>Delete</span>
          <span className="delete-question">Are you sure?</span>
          <span>Yes</span>
          <span>No</span>
        </div>
      </div>
      <div className="post-edit-form">
        <form className="edit-form">
          <textarea
            type="text"
            name="content"
            id="content"
            className="content"
            placeholder="What's happenging?"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            velit delectus ex tempora quasi est error perspiciatis, quaerat amet
            maiores recusandae modi veritatis. Qui deserunt ipsa, ab explicabo
            repudiandae unde?
          </textarea>
          <div className="btn-container">
            <button className="btn" type="button">
              Update
            </button>
            <button className="btn" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
