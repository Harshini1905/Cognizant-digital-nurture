import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div>
      <h1>Blog Details</h1>
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
            <small>{blog.content}</small>
          </div>
        ))
      ) : (
        <p>No blogs to show</p>
      )}
    </div>
  );
}

export default BlogDetails;
