import { useState } from 'react'
import Navbar from './Navbar'
import Students from './Students'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Results from './Results'
import Teachers from './Teachers'




function App() {

  // const [students, setStudents] = useState([]);
     
  // useEffect(() => {
  //   fetch("http://localhost:9292/students")
  //   .then((r) => r.json)
  //   .then((data) => {
  //     setStudents(data);
  //   });
  // }, []);



  return (
    <div className="App">
     <Navbar  />
     <Routes>
     
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/results" element={<Results/>} /> 
      <Route path="/" element={<Home />} />

      
     </Routes>
    </div>
  )
}

export default App
