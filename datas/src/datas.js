import React from 'react'
import { useEffect,useState } from 'react'
const Datas = () => {
    const[rec,setRec]=useState([])
    const fetchdata=()=>
   {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then((res)=>setRec(res))
        .catch(e=>console.log(e))

    }

    useEffect(()=>
    {
          fetchdata()
    },[])
    
  return rec.map((e)=>
  { 
     const {name,id,email}=e;
      return<div>
        <ul>
            <li>{name}  {id}  {email} </li>
        </ul>
       </div>
  })
}
export default Datas
