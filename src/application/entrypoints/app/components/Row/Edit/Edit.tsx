/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { EditProps } from './types'

/* Icons */
import EditIcon from '../../Icons/Edit';

const Edit: FunctionComponent<EditProps> = ({ itemId }) => {
  return (
    <a href={itemId} title="Editar">
      <EditIcon />
    </a>
  )
}

export default Edit;