import React, { useState } from 'react'
import Form from './Form'
import Button from '../atoms/Button'
import LoadingEffect from '../atoms/LoadingEffect'

import { getIdMobileLegends } from '../../utils/fetch'
import ResultUserName from '../atoms/ResultUserName'
import HeadPage from '../atoms/HeadPage'

const RootML = () => {
   const [datas, setDatas] = useState([])
   const [isLoading, setIsloading] = useState(false)
   const [form, setForm] = useState({
      id: '',
      server: ''
   })

   const handleOnchange = (e) => {
      e.preventDefault()
      setForm({ ...form, [e.target.name]: e.target.value })
   }

   const handleSubmit = async () => {
      setIsloading(true)
      try {
         const response = await getIdMobileLegends(form.id, form.server);
         setDatas(response.data);
         console.log(datas)
      } catch (error) {
         console.error('Error fetching data:', error);
      }
      setIsloading(false)
   };

   return (
      <div className=' w-full flex justify-center flex-col items-center relative'>
         <HeadPage>
            <p className='text-gray-400 py-3 bg-glass px-2'>Untuk mencari dan mengecek userID atau UserName dari game Moboile Lagned cukup mudah, anda tinggal isi ID dan server anda di bawah ini dan klik Checker</p>
         </HeadPage>
         <div className="w-full px-3 md:w-80">
            <Form form={form} handleOnchange={handleOnchange} />
         </div>

         <Button
            loading={isLoading}
            action={handleSubmit}
            disabled={isLoading}
         >
            Checker
         </Button>

         <div className="w-full px-3 md:w-96 mt-5">
            {isLoading ? (
               <div className="">
                  <LoadingEffect />
               </div>
            ) : (
               Object.keys(datas).length > 0 && (
                  <ResultUserName>
                     <p className='text-gray-400'>{datas.game}</p>
                     <p className='text-gray-400'>{datas.userId}</p>
                     <p className='text-gray-400'>{datas.username}</p>
                  </ResultUserName>
               )
            )}
         </div>
      </div>
   )
}

export default RootML