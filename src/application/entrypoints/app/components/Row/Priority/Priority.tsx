/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { PriorityTypes } from './types'

/* Icons */
import ArrowDownIcon from '../../Icons/ArrowDown';

const arrowRotation: { [key: string]: string } = {
  High: 'rotate-180',
  Medium: '-rotate-90',
  Low: 'rotate-0'
}

const Priority: FunctionComponent<PriorityTypes> = ({ priority }) => {
  return (
    <ArrowDownIcon className={`transform ${arrowRotation[priority]}`} />
  )
}

export default Priority;