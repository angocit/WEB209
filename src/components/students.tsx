import React, { useContext } from 'react'
import { StudentCT } from '../studentcontext'
import { IStudent } from '../interface/students'
import { Link } from 'react-router-dom'

const Students = () => {
  const {students,onDelete} = useContext(StudentCT)
  return (
    <>
    <h1>Danh sách sinh viên</h1>
    <table>
      <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Tuổi</th>
        <th>Email</th>
        <th>SĐT</th>
        <th>Thao tác</th>
      </tr>
      </thead>
      <tbody>
        {students.map((student:IStudent,index:number)=>(
          <tr key={index}>
              <td>{index+1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <Link to={`/students/edit/${student.id}`}>Sửa</Link>
                <button onClick={()=>onDelete(student.id)}>Xóa</button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Students