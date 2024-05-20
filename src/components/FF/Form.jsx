import React from 'react'
import FormInput from '../atoms/FormInput'

const Form = ({ form, handleOnchange }) => {
   return (
      <div>
         <FormInput
            type='text'
            name='id'
            value={form.id}
            onChange={handleOnchange}
            required
            label={'ID'}
         />
      </div>
   )
}

export default Form