/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Utils */
import { formatDate } from '../../../utils/formatDate';

/* Types */
import { AssignmentDayProps } from './types'

const AssignmentDay: FunctionComponent<AssignmentDayProps> = ({ assignmentDay }) => {
  return (
    <span>
      { assignmentDay ? formatDate(assignmentDay) : '----' }
    </span>
  )
}

export default AssignmentDay;