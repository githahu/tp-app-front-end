import React, { useState } from "react";

const Results = ({ students, teachers }) => {
  const [teacherGrade, setTeacherGrade] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [student, setStudent] = useState(null);
  const [maths, setMaths] = useState(null);
  const [english, setEnglish] = useState(null);
  const [science, setScience] = useState(null);
  const [kiswahili, setKiswahili] = useState(null);
  const [geography, setGeography] = useState(null);
  const [history, setHistory] = useState(null);
  

  const teacherObj = teachers?.filter((t) => t.id == teacher);
  const gradeStudents = students.filter(
    ( student ) => student.grade_id == teacherObj[0]?.grade_id
    
  );
 
  const handleSubmit = e => {
    e.preventDefault()
    fetch("http://localhost:9292/results", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            teacher_id: teacher, 
            student_id: student,
            maths,
            english,
            science,
            kiswahili,
            geography,
            history

        })
    })
    setTeacher(null),
    setStudent(null),
    setMaths(null),
    setEnglish(null),
    setScience(null),
    setKiswahili(null),
    setGeography(null),
    setHistory(null)
  }
  return (
    <div className="results-main-container">
      <div className="results-form">
        <form onSubmit={handleSubmit}>
          <h1>Add Student Marks</h1>

          <div className="section">
            <label>Select teacher</label>
            <select
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
            >
              <option hidden>select teacher</option>
              {teachers?.map((t) => {
                return <option value={t.id}>{t.name}</option>;
              })}
            </select>
          </div>
          {teacher ? (
            <div className="section">
              <label>Select Student</label>
              <select
                value={student}
                onChange={(e) => setStudent(e.target.value)}
              >
                <option hidden>select student</option>
                {gradeStudents?.map((t) => {
                  return <option value={t.id}>{t.name}</option>;
                })}
              </select>
            </div>
          ) : (
            <p></p>
          )}
          {student ? (
            <>
            <h3>Enter student Marks</h3>
            <div className="section">
              <label>Maths</label>
              <input type="number" value={maths} onChange={e => setMaths(e.target.value)} />
            </div> 
            <div className="section">
              <label>English</label>
              <input type="number" value={english} onChange={e => setEnglish(e.target.value)} />
            </div>
             <div className="section">
              <label>Science</label>
              <input type="number" value={science} onChange={e => setScience(e.target.value)} />
            </div>
             <div className="section">
              <label>Kiswahili</label>
              <input type="number" value={kiswahili} onChange={e => setKiswahili(e.target.value)} />
            </div> 
            <div className="section">
              <label>Geography</label>
              <input type="number" value={geography} onChange={e => setGeography(e.target.value)} />
            </div> 
            <div className="section">
              <label>History</label>
              <input type="number" value={history} onChange={e => setHistory(e.target.value)} />
            </div>
            <button type="Submit">Submit Marks</button>
            </>
          ) : (
            <p></p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Results;
 