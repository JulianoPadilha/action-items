/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { TitleProps } from './types';

const Title: FunctionComponent<TitleProps> = ({ title, openModalDetail }) => {
  return (
    <a className="cursor-pointer" onClick={openModalDetail}>{ title }</a>
  )
}

export default Title;