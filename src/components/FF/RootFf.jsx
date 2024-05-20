import React, { useState } from 'react'
import Form from './Form'
import HeadPage from '../atoms/HeadPage'
import Button from '../atoms/Button'
import ResultUserName from '../atoms/ResultUserName'
import LoadingEffect from '../atoms/LoadingEffect'

import { GetFreeFire } from '../../utils/fetch'

const RootFf = () => {
   const [datas, setDatas] = useState([])
   const [error, setError] = useState(null)
   const [isLoading, setIsloading] = useState(false)
   const [form, setForm] = useState({ id: '' })

   const handleOnchange = (e) => {
      e.preventDefault()
      setForm({ ...form, [e.target.name]: e.target.value })
   }

   const handleSubmit = async () => {
      setIsloading(true)
      setError(null);
      try {
         const response = await GetFreeFire(form.id);

         if (response.error) {
            setError(response.msg)
         } else {
            setDatas(response.data);
         }

      } catch (error) {
         console.error('Error fetching data:', error);
         setError('An unexpected error occurred.');
      }
      setIsloading(false)
   };

   return (
      <div className=' w-full flex justify-center flex-col items-center relative'>
         <HeadPage>
            <p className='text-gray-400 py-3 bg-glass px-2'>Untuk mencari dan mengecek userID atau UserName dari game free-fire cukup mudah, anda tinggal isi ID anda di bawah ini dan klik Checker</p>
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
               Object.keys(datas).length > 0 || error ? (
                  <ResultUserName>
                     <p className='text-gray-400'>{datas.game}</p>
                     <p className='text-gray-400'>{datas.userId}</p>
                     <p className='text-gray-400'>{datas.username}</p>
                     {error && <p className='text-red-400'>{error}</p>}
                  </ResultUserName>
               ) : (
                  ""
               )
            )}
         </div>
      </div>
   )
}

export default RootFf