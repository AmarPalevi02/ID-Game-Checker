import React, { useState } from 'react'
import Form from './Form'

import { getIdMobileLegends } from '../../utils/fetch'

const RootML = () => {
   const [datas, setDatas] = useState([])
   const [form, setForm] = useState({
      id: '',
      server: ''
   })

   const handleOnchange = (e) => {
      e.preventDefault()
      setForm({ ...form, [e.target.name]: e.target.value })
   }

   const handleSubmit = async () => {
      try {
         const response = await getIdMobileLegends(form.id, form.server);
         setDatas(response);
      } catch (error) {
         console.error('Error fetching data:', error);
      }
   };

   return (
      <div>
         <Form form={form} handleOnchange={handleOnchange} />
         <button onClick={handleSubmit} >Ceker</button>
      </div>
   )
}

export default RootML