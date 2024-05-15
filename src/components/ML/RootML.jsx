import React, { useState } from 'react'
import Form from './Form'

const RootML = () => {
   const [datas, setDatas] = useState([])
   const [form, setForm] = useState({
      id: '',
      server: ''
   })

   const handleOnchange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value })
      console.log(form)
   }

   const handleSubmit = () => {
      console.log(form)
   }


   return (
      <div>
         <Form form={form} handleOnchange={handleOnchange} />
  
         <button onClick={handleSubmit} >Ceker</button>
      </div>
   )
}

export default RootML