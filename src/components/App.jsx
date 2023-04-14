import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Students from './Students'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Results from './Results'
import Teachers from './Teachers'




function App() {

  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
     
  useEffect(() => {
    fetch("http://localhost:9292/students")
    .then((r) => r.json())
    .then((data) => {
      setStudents(data);
    });

    fetch("http://localhost:9292/teachers")
    .then((r) => r.json())
    .then((data) => {
      setTeachers(data);
    });
  }, []);



  return (
    <div className="App">
     <Navbar  />
     <Routes>
     
      <Route path="/students" element={<Students students={students} />} />
      <Route path="/teachers" element={<Teachers teachers={teachers}/>} />
      <Route path="/results" element={<Results students={students} teachers={teachers}/>} /> 
      <Route path="/" element={<Home />} />

      
     </Routes>
    </div>
  )
}

export default App;
