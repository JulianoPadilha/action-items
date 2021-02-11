/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { PriorityTypes } from './types'

const Priority: FunctionComponent<PriorityTypes> = ({priority}) => {
  return (
    <p className={`priority-${priority.toLocaleLowerCase()}`}>{ priority }</p>
  )
}

export default Priority;