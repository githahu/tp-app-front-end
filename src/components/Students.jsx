import React from 'react'


const Students = ({students}) => {
  return (
    <div className="students-main-container">
        <h1>Students</h1>
        <div className="students-container">
            <table>
                <thead>
                <th>Std ID</th>
                <th>Name</th>
                <th>Grade </th>
                <th>Address</th>
                    
                </thead>
                <tbody>
                    

            {students.map((student) => {
                return (
                    <tr>
                        <td className="center">{student.id}</td>
                        <td>{student.name}</td>
                        <td className="center">{student.grade_id}</td>
                        <td>{student.address}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Students