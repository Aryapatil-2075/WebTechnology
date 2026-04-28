import { useState } from 'react';

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');

  const addStudent = (e) => {
    e.preventDefault();

    if (name === '' || age === '' || course === '') {
      alert('Please enter name, age, and course');
    } else {
      setStudents([...students, { name, age, course }]);
      alert('Student added successfully');
      setName('');
      setAge('');
      setCourse('');
    }
  };

  return (
    <div className="page-card">
      <h2>Add Student</h2>
      <form className="student-form" onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
