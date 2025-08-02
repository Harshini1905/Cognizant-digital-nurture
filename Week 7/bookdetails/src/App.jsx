import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const books = [
    { id: 1, bname: 'Master React', price: 670 },
    { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 3, bname: 'Mongo Essentials', price: 450 },
  ];

  const blogs = [
    { title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
    { title: 'Installation', author: 'Schwezdenier', content: 'You can install React from npm.' },
  ];

  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/1/2021' },
  ];

  return (
    <div className="container">
      <div className="column">
        <BookDetails books={books} />
      </div>
      <div className="column">
        <BlogDetails blogs={blogs} />
      </div>
      <div className="column">
        <CourseDetails courses={courses} />
      </div>
    </div>
  );
}

export default App;
