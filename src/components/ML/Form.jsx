import React from 'react';
import FormInput from '../atoms/FormInput';

const Form = ({ form, handleOnchange }) => {
   return (
      <div className=''>
         <FormInput
            type='text'
            name='id'
            value={form.id}
            onChange={handleOnchange}
            required
            label={'ID'}
         />
         <FormInput
            type='text'
            name='server'
            value={form.server}
            onChange={handleOnchange}
            required
            label={'Server'}
         />
      </div>
   );
};

export default Form;
