/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { ButtonProps } from './types';

/* Modifiers */
const modifierType: { [key: string]: string } = {
  create: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
  cancel: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
}

/* Modifiers */
const sizeType: { [key: string]: string } = {
  full: 'w-full',
  medium: 'w-1/5',
}

const Button: FunctionComponent<ButtonProps> = ({ 
  label, 
  type, 
  modifier, 
  size, 
  onClick, 
  href, 
  className 
}) => {
  let component;
  if (href) {
    return component = <a type={type} href={href} className={`font-semibold py-3 rounded-lg mt-10 text-lg text-center ${className} ${sizeType[size]} ${modifierType[modifier]}`}>{ label }</a>
  }

  return component = <button type={type} onClick={onClick} className={`font-semibold py-3 rounded-lg mt-10 text-lg text-center ${className} ${sizeType[size]} ${modifierType[modifier]}`}>{ label }</button>
}

export default Button;
