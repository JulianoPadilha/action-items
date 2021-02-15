/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { StatusProps } from './types';

const Status: FunctionComponent<StatusProps> = ({ status }) => {
  const statusBgColor: { [key: string]: string } = {
    TODO: 'bg-gray-300',
    WIP: 'bg-yellow-300',
    DONE: 'bg-green-300',
    BLOCKED: 'bg-pink-300',
    CANCELED: 'bg-red-300'
  }

  return (
    <span 
      className={`px-3 py-1 rounded-md text-white font-semibold ${statusBgColor[status]}`}>
      { status }
    </span>
  )
}

export default Status;