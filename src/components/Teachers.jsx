import React from 'react'

const Teachers= ({teachers}) => {


  return (
    <div className="students-main-container">
        <h1>Teachers</h1>
        <div className="students-container">
            <table>
                <thead>
                
               
                <th>Teacher ID</th>     
                <th>Name</th>

                <th>Grade </th>
                
                    
                </thead>
                <tbody>
                    

            {teachers.map((teacher) => {
                return (
                    <tr>
                      
                      <td>{teacher.id}</td>
                        <td>{teacher.name}</td>
                        <td className="center">{teacher.grade_id}</td>
                       
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    </div>
  )

    
  
}

export default Teachers