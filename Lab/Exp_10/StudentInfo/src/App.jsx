import Student from './Student.jsx'
import './App.css'

function App() {
  const students = [
    {
      id: 1,
      name: 'Arya Patil',
      age: 22,
      course: 'CSE(AIML)',
    },
    {
      id: 2,
      name: 'Sandhya Patil',
      age: 40,
      course: 'AIDS',
    },
    {
      id: 3,
      name: 'Bharat Patil',
      age: 48,
      course: 'AIML',
    },
    {
      id: 4,
      name: 'Rohan Patil',
      age: 26,
      course: 'Pharmacy',
    },


  ]

  const showMessage = () => {
    alert('Button Clicked!')
  }

  return (
    <div className="container">
      <h1>React Functional Components & Event Handling</h1>

      <button onClick={showMessage}>Click Me</button>

      <div className="student-list">
        {students.map((student) => (
          <Student
            key={student.id}
            name={student.name}
            age={student.age}
            course={student.course}
          />
        ))}
      </div>
    </div>
  )
}

export default App
