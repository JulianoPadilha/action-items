/* Dependencies */
import React from 'react';

const modifierType: any = {
  create: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
  cancel: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
}

const sizeType: any = {
  full: 'w-full',
  medium: 'w-1/5',
}

const Button = ({ label, type, modifier, size, onClick = null, href = null, className = '' }: any) => {
  let component;
  if (href) {
    return component = <a type={type} href={href} className={`font-semibold px-10 py-3 rounded-lg mt-10 text-lg text-center ${className} ${sizeType[size]} ${modifierType[modifier]}`}>{ label }</a>
  }

  return component = <button type={type} onClick={onClick} className={`font-semibold px-10 py-3 rounded-lg mt-10 text-lg text-center ${className} ${sizeType[size]} ${modifierType[modifier]}`}>{ label }</button>
}

export default Button;
