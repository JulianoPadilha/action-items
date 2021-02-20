/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { OwnerProps } from './types'

const Owner: FunctionComponent<OwnerProps> = ({ owner }) => {
  return (
    <span>
      { owner.length ? owner.map(i => <p key={i}>{ i }</p>) : '----' }
    </span>
  )
}

export default Owner;