import React from 'react';
import FormInput from '../atoms/FormInput';

const Form = ({ form, handleOnchange }) => {
   return (
      <div>
         <label htmlFor="id">ID</label>
         <FormInput
            type='text'
            name='id'
            value={form.id}
            onChange={handleOnchange}
            required
         />
         <label htmlFor="server">Server</label>
         <FormInput
            type='text'
            name='server'
            value={form.server}
            onChange={handleOnchange}
            required
         />
      </div>
   );
};

export default Form;
