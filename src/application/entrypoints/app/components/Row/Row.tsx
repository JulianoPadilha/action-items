/* Dependencies */
import React, { FunctionComponent } from 'react';

/* Types */
import { RowTypes } from './types';

/* Row Components */
import AssignmentDay from './AssignmentDay/AssignmentDay';
import Delete from './Delete/Delete';
import Edit from './Edit/Edit';
import EndDay from './EndDay/EndDay';
import Header from './Header/Header';
import Status from './Status/Status';
import Owner from './Owner/Owner';
import Priority from './Priority/Priority';
import Title from './Title/Title';
import Type from './Type/Type';

/* Components */
import ContentNotFound from '../ContentNotFound/ContentNotFound';

/* Icons */
import Spinner from '../Icons/Spinner';
import Star from '../Icons/Star';


const Row: FunctionComponent<RowTypes> = ({
  items,
  isLoading,
  openModalDetail,
  openModalDeleteActionItem
}) => {
  return (
    <div className="flex flex-wrap">
      <Header />
      {!isLoading && items.length ? items.map(item => {
        return (
          <div key={item._id} className="flex w-full m-4">
            <ul className="grid grid-cols-9 w-full py-3 text-center items-center text-base text-gray-500">
              <li>
                { item.sprint && <Star className="mx-auto mb-2" /> }
                <Title openModalDetail={() => openModalDetail(item._id)} title={item.title} />
              </li>
              <li className={`mx-auto priority-${item.priority.toLocaleLowerCase()}`}>
                <Priority priority={item.priority} />
              </li>
              <li>
                <AssignmentDay assignmentDay={item.assignmentDay} />
              </li>
              <li>
                <EndDay endDay={item.endDay} />
              </li>
              <li>
                <Status status={item.status} />
              </li>
              <li>
                <Type type={item.type} />
              </li>
              <li>
                <Owner owner={item.owner} />
              </li>
              <li className="mx-auto text-green-700 gap-10">
                <Edit itemId={item._id} />
              </li>
              <li className="mx-auto cursor-pointer text-red-500">
                <Delete openModalDeleteActionItem={() => openModalDeleteActionItem(item)} />
              </li>
            </ul>
          </div>
        ) }) : !isLoading && !items.length ? <ContentNotFound />  : <Spinner />
      }
    </div>
  )
}

export default Row;
