/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { TypeProps } from './types'

const Type: FunctionComponent<TypeProps> = ({ type }) => {
  return (
    <span>
      { type }
    </span>
  )
}

export default Type;