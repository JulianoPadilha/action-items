/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { RowTypes, ArrowRotation } from './types';

/* Components */
import Header from './Header/Header';
import Status from './Status/Status';
import ContentNotFound from '../ContentNotFound/ContentNotFound';

/* Icons */
import ArrowDownIcon from '../Icons/ArrowDown';
import EditIcon from '../Icons/Edit';
import DeleteIcon from '../Icons/Delete';
import Spinner from '../Icons/Spinner';

/* Utils */
import { formatDate } from '../../utils/formatDate';

const Row: FunctionComponent<RowTypes> = ({
  items,
  isLoading,
  openModalDetail,
  openModalDeleteActionItem
}) => {
  return (
    <div className="flex flex-wrap">
      <Header />
      {!isLoading && items.length ? items.map(item => (
        <div key={item._id} className="flex w-full m-4">
          <ul className="grid grid-cols-row-9 w-full py-3 text-center items-center text-base text-gray-500">
            <li onClick={() => openModalDetail(item._id)} className="cursor-pointer">
              { item.title }
            </li>
            <li className={`mx-auto priority-${item.priority.toLocaleLowerCase()}`}>
               <ArrowDownIcon className={`transform ${ArrowRotation[item.priority]}`} />
            </li>
            <li>{ item.assignmentDay ? formatDate(item.assignmentDay) : '----' }</li>
            <li>{ item.endDay ? formatDate(item.endDay) : '----' }</li>
            <li><Status status={item.status} /></li>
            <li>{ item.type }</li>
            <li>{ item.owner || '----' }</li>
            <li className="mx-auto text-green-700 gap-10">
              <a href={item._id} title="Editar"><EditIcon /></a>
            </li>
            <li className="mx-auto cursor-pointer text-red-500">
              <button title="Excluir" onClick={() => openModalDeleteActionItem(item)}><DeleteIcon /></button>
            </li>
          </ul>
        </div>
      )) : !isLoading && !items.length ? <ContentNotFound />  : <Spinner />
      }
    </div>
  )
}

export default Row;
