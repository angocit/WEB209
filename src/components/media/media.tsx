import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IMedia } from '../../types/media'
type Props = {
    setClose: (value:boolean)=>void,
    setUrl:(value:string)=>void,
}
const MediaManager = ({setClose,setUrl}:Props) => {
    const [tab,setTab] = useState<boolean>(true)
    const [media,setMedia] = useState<IMedia[]>([])
    const onUpload = async (file:any)=>{
        const url = "https://api.cloudinary.com/v1_1/dkpfaleot/image/upload"
        const formdata = new FormData()
        formdata.append('file',file[0])
        formdata.append('upload_preset','seminar')
        const {data} = await axios.post(url,formdata)
        console.log(data);   
        const {data:newmedia} = await axios.post(`http://localhost:4000/media`,data)  
        // console.log(media);  
        setMedia([...media,newmedia])     
        setTab(true)    
    }
    useEffect(()=>{
        (async()=>{
            try {
                const {data} = await axios.get(`http://localhost:4000/media`)
                setMedia(data)
            } catch (error) {
                
            }
        })()
    },[])
  return (
    <div className='media fixed top-[100px] left-0 flex justify-center w-full'>
        <div className='bg-white max-w-4xl w-full block shadow-lg'>
            <header className='flex justify-between'>
                <ul className='flex gap-1'>
                    <li><button onClick={()=>setTab(false)}>Upload</button></li>
                    <li><button onClick={()=>setTab(true)}>Media</button></li>
                </ul>
                <button onClick={()=>setClose(false)}>x</button>
            </header>
            <div className='content min-h-[500px] flex justify-center items-center'>
                {(tab)?<>
                    {media.map(item=>(
                        <button key={item.id} onDoubleClick={()=>setUrl(item.url)}><img src={item.url} className='max-w-[150px]'/></button>
                    ))}
                </>:<>
                    <input type='file' onChange={(e)=>onUpload(e.target.files)}/>
                </>}
            </div>
        </div>
    </div>
  )
}

export default MediaManager