import React from 'react';
import Student from './Components/Student';
import Teacher from './Components/Teacher';

function App() {
  const student1 = new Student('Student', 20, 'Course');
  const teacher1 = new Teacher('Teacher', 35, 'Subject');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Person Class Hierarchy</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>Student Info</h2>
        <p>Name: {student1.name}</p>
        <p>Age: {student1.age}</p>
        <p>Course: {student1.course}</p>
      </div>

      <div>
        <h2>Teacher Info</h2>
        <p>Name: {teacher1.name}</p>
        <p>Age: {teacher1.age}</p>
        <p>Subject: {teacher1.subject}</p>
      </div>
    </div>
  );
}

export default App;
