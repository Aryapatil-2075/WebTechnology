import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import StudentList from './Components/StudentList';
import AddStudent from './Components/AddStudent';
import './App.css';

function App() {
  // State to store student list
  const [students, setStudents] = useState([]);

  return (
    // Router enables page navigation
    <BrowserRouter>
      {/* Navbar will be visible on all pages */}
      <Navbar />

      {/* Routes define different pages */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Student List Page (data passed as props) */}
        <Route path="/students" element={<StudentList students={students} />} />

        {/* Add Student Page (passing state + function) */}
        <Route
          path="/add"
          element={
            <AddStudent students={students} setStudents={setStudents} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
