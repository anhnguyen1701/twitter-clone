import React from 'react';
import '../css/Form.css';

export default function Form() {
  return (
    <form action="" className="form">
      <textarea
        type="text"
        id="content"
        name="content"
        className="content"
        placeholder="What's happening?"
      ></textarea>
      <button className="btn" type="submit">
        Tweet
      </button>
    </form>
  );
}
