import React from 'react';

const FormInput = ({ type, name, onChange, value, required, label }) => {
   return (
      <div className="relative mb-6">
         <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder=" "
            className="block w-full px-4 py-2 text-base bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 peer"
         />
         <label
            htmlFor={name}
            className={`absolute left-3 top-2 text-gray-500 transition-all duration-200 ease-in-out ${value ? 'transform -translate-y-5 scale-75 text-gray-500 bg-white rounded-xl' : 'top-1/2 -translate-y-1/2'
               } pointer-events-none  px-1`}
         >
            {label}
         </label>
      </div>
   );
};

export default FormInput;
