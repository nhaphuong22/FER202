import React from "react";
export default function CourseList() {
  const courses = ['React', 'ReactNative', 'NodeJs'];
  
  return (
    <div>
      <h2>Course names</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index} style={{ fontSize: '1.2rem', marginBottom: '5px' }}>
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
};