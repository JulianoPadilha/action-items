/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { DeleteProps } from './types'

/* Icons */
import DeleteIcon from '../../Icons/Delete';

const Delete: FunctionComponent<DeleteProps> = ({ openModalDeleteActionItem }) => {
  return (
    <button title="Excluir" onClick={openModalDeleteActionItem}>
      <DeleteIcon />
    </button>
  )
}

export default Delete;