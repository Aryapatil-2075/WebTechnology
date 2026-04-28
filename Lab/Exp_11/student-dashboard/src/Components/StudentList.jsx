function StudentList({ students }) {
  return (
    <div className="page-card">
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p className="empty-text">No student added yet.</p>
      ) : (
        <ul className="student-list">
          {students.map((student, index) => (
            <li key={index} className="student-item">
              <strong>Name:</strong> {student.name} <br />
              <strong>Age:</strong> {student.age} <br />
              <strong>Course:</strong> {student.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
