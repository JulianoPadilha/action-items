/* Dependencies */
import React from 'react';

/* Icons */
import AddIcon from '../../components/Icons/Add';
import FilterIcon from '../../components/Icons/Filter';

const HeaderActions = ({ openFilter }: any) => {
  return (
    <div className="absolute top-7 right-14">
      <a href="/create">
        <AddIcon className="cursor-pointer text-purple-400 hover:text-purple-600" />
      </a>
      <button className="mt-5" onClick={openFilter}>
        <FilterIcon className="text-gray-400 hover:text-gray-600" />
      </button>
    </div>
  )
}

export default HeaderActions;