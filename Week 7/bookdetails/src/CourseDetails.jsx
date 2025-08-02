import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div>
      <h1>Course Details</h1>
      {courses.length && (
        <ul>
          {courses.map((course, idx) => (
            <li key={idx}>
              <h3>{course.name}</h3>
              <p>{course.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseDetails;
