/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { OwnerProps } from './types'

const Owner: FunctionComponent<OwnerProps> = ({ owner }) => {
  return (
    <span>
      { owner || '----' }
    </span>
  )
}

export default Owner;