import React, { createContext, useEffect, useState } from 'react'
import { FormStudent, IStudent } from './interface/students'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type Props = {
    children:React.ReactNode
}
export const StudentCT = createContext({} as any)
const Studentcontext = ({children}: Props) => {
    const [students,setStudent] = useState<IStudent[]>([])
    const navigate = useNavigate()
    useEffect(()=>{
        (async ()=>{
            try {
                const {data} = await axios.get('http://localhost:3000/students')
                setStudent(data)
            } catch (error) {
                console.log(error);                
            }
            
        })()
    },[])
    const onAdd = async (studentdata:FormStudent)=>{
        try {
            const {data} = await axios.post('http://localhost:3000/students',studentdata)
            setStudent([...students,data])
            alert('Thêm mới thành công')
            navigate('/students')
        } catch (error) {
            
        }
    }
    const onUpdate = async (studentdata:FormStudent,id:number|string)=>{
        try {
            const {data} = await axios.put('http://localhost:3000/students/'+id,studentdata)
            alert('Cập nhật thành công')
            const newstudents = students.map(student=>(student.id==id)?data:student)
            setStudent(newstudents)
            navigate('/students')
        } catch (error) {
            
        }
    }
    const onDelete = async (id:number|string)=>{
        if (confirm('Bạn chắc chứ')){
            try {
                const {data} = await axios.delete('http://localhost:3000/students/'+id)
                alert('Cập nhật thành công')
                const newstudents = students.filter(student=>student.id!==id)
                setStudent(newstudents)
            } catch (error) {
                
            }
        }
    }
  return (
    <StudentCT.Provider value={{students,onAdd,onDelete,onUpdate}}>{children}</StudentCT.Provider>
  )
}

export default Studentcontext