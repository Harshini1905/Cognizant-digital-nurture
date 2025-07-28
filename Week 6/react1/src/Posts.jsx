import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true });
      });
  };


  componentDidMount() {
    this.loadPosts();
  }

 
  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.toString());
    this.setState({ hasError: true });
  }


  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h2 style={{ color: 'red' }}>Something went wrong!</h2>;
    }

    return (
      <div>
        <h1>Posts</h1>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
