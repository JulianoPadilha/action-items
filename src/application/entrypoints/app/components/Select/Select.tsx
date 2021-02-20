/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { SelectTypes } from './types';

const sizeModifier: { [key: string]: string } = {
  full: 'w-full',
  other: 'w-96'
}

const Select: FunctionComponent<SelectTypes> = ({ 
  items, 
  label,
  multiple = false,
  id, 
  value, 
  size,
  required,
}) => {
  return (
    <div>
      <label htmlFor={ id } className="block text-base text-gray-500">{ label }</label>
      <select required={required} multiple={multiple} value={value} name={ id } id={ id } className={`border-gray-300 border rounded-md p-2 ${sizeModifier[size]}`}>
        <option value="">Selecionar</option>
        {Object.values(items).map(status => (
          <option key={status} value={status}>{ status }</option>
        ))}
      </select>
    </div>
  )
}

export default Select;