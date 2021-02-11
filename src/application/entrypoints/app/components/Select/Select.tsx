/* Dependencies */
import React from 'react';

/* Types */
import { SelectTypes } from './types';

const sizeModifier: any = {
  full: 'w-full',
  other: 'w-96'
}

const Select = ({ items, label, id, value, size, required }: SelectTypes) => {
  return (
    <div>
      <label htmlFor={ id } className="block text-base text-gray-500">{ label }</label>
      <select required={required} value={value} name={ id } id={ id } className={`border-gray-300 border rounded-md p-2 ${sizeModifier[size]}`}>
        <option value="">Selecionar</option>
        {Object.values(items).map(status => (
          // @ts-ignore
          <option key={status} value={status}>{ status }</option>
        ))}
      </select>
    </div>
  )
}

export default Select;