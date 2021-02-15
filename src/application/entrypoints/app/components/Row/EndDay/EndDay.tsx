/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Utils */
import { formatDate } from '../../../utils/formatDate';

/* Types */
import { EndDayProps } from './types'

const EndDay: FunctionComponent<EndDayProps> = ({ endDay }) => {
  return (
    <span>
      { endDay ? formatDate(endDay) : '----' }
    </span>
  )
}

export default EndDay;