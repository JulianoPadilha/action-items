/* Dependencies */
import React, { useCallback, useEffect, useState } from 'react';

/* Types */
import { ActionItem } from '../../../types/ActionItem';

/* Utils */
import { statusList } from '../../../utils/statusList';
import { ownerList } from '../../../utils/ownerList';
import { typeList } from '../../../utils/typeList';
import { priorityList } from '../../../utils/priorityList';

/* Services */
import getAllActionItems from '../../../services/getAllActionItems';
import getActionItemById from '../../../services/getActionItemById';
import deleteActionItemById from '../../../services/deleteActionItemById';
import getActionItemByFilter from '../../../services/getActionItemByFilter';

/* Components */
import Row from '../../../components/Row/Row';
import Button from '../../../components/Button/Button';
import Select from '../../../components/Select/Select';
import ModalDetail from '../../../components/ModalDetail/ModalDetail';
import ModalDelete from '../../../components/ModalDelete/ModalDelete';
import HeaderActions from '../../../components/HeaderActions/HeaderActions';

/* Icons */
import Close from '../../../components/Icons/Close';

const Home = () => {
  const [preFetchedData, setPreFetchData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [actionItemData, setActionItemData] = useState<any>({});
  const [isFilterOpen, setOpenFilter] = useState(false);
  const [filterFields, setFilterFields] = useState({});
  const [isModalDetailOpen, setModalDetailOpen] = useState(false);
  const [modalDeleteOpenData, setModalDeleteOpen] = useState({ 
    isModalOpen: false, 
    item: null
  });

  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await getAllActionItems();
      if (response) {
        setLoading(false);
        setPreFetchData(response);
      }
    })();
  }, []);

  const openModalDetail = async (itemId: string) => {
    const response = await getActionItemById(itemId);
    if (response) {
      setActionItemData(response);
      setModalDetailOpen(true);
    }
  }

  const closeModalDetail = () => {
    setModalDetailOpen(false);
    setModalDeleteOpen({ isModalOpen: false, item: null });
  }

  const closeModalDetailClickOutside = (ref: any, event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      closeModalDetail();
    }
  };

  const openModalDeleteActionItem = async (item: any) => {
    setModalDeleteOpen({ isModalOpen: true, item });
  }
  
  const deleteActionItem = async (itemId: string) => {
    const response = await deleteActionItemById(itemId);
    if (response) {
      window.location.reload();
    }
  }

  const openFilter = () => {
    setOpenFilter(true);
  }

  const closeFilter = () => {
    setOpenFilter(false);
  }

  const onFieldChange = (event: any) => {
    const fieldName = event.target.id;
    const fieldValue = event.target.value;
    
    if (fieldName && !fieldValue) {
      if (filterFields.hasOwnProperty(fieldName)) {
        setFilterFields((state: any) => {
          // Remove empty selected field using a temp value and destructuring the rest 
          const { [fieldName]: _temp, ...rest } = state;
          return { ...rest };
        });
      }
    }

    if (fieldName && fieldValue) {
      //Copy previously state value and aggregate new values
      setFilterFields((state: any) => ({ ...state, [fieldName]: fieldValue }));
    }

  }

  const filterItems = async () => {
    setLoading(true);
    const response = await getActionItemByFilter(filterFields);
    if (response) {
      setPreFetchData(response);
      setLoading(false);
    }
  }

  const resetFilters = useCallback(async () => {
    setFilterFields({});
    const selects = document.querySelectorAll('select');
    Array.from(selects).map(select => select.value = "");
    await filterItems();
  }, [])

  return (
    <div>
      <HeaderActions openFilter={openFilter} />
      <Row 
        openModalDetail={openModalDetail}
        openModalDeleteActionItem={openModalDeleteActionItem}
        // @ts-ignore
        items={preFetchedData} 
        isLoading={isLoading}
      />
      { isModalDetailOpen && 
        <ModalDetail 
          closeModalDetailClickOutside={closeModalDetailClickOutside} 
          closeModalDetail={closeModalDetail} 
          item={actionItemData} 
        />
      }
      { modalDeleteOpenData.isModalOpen && 
        <ModalDelete 
          closeModalDetailClickOutside={closeModalDetailClickOutside} 
          closeModalDetail={closeModalDetail}
          deleteActionItem={deleteActionItem}
          item={modalDeleteOpenData.item}
        />
      }
      <div className={`bg-gray-100 h-screen absolute top-0 shadow-2xl ${isFilterOpen ? 'opacity-1 right-0 transition-opacity ease-in-out duration-300 w-80' : 'opacity-0 w-0'}`}>
        <div className="flex justify-between mb-2 p-5 bg-gray-200 shadow-md">
          <h2 className="text-xl text-gray-700">Filtrar por:</h2>
          <button onClick={closeFilter}>
            <Close className="text-gray-700" />
          </button>
        </div>
        <form className="p-5" onChange={onFieldChange}>
          <div className="mb-5">
            <Select required={false} label="Status" id="status" size="full" items={statusList} />
          </div>
          <div className="mb-5">
            <Select required={false} label="Prioridade" id="priority" size="full" items={priorityList} />
          </div>
          <div className="mb-5">
            <Select required={false} label="Tipo" id="type" size="full" items={typeList} />
          </div>
          <div className="mb-5">
            <Select required={false} label="Responsável" id="owner" size="full" items={ownerList} />
          </div>
          
          <div>
            <Button onClick={filterItems} label="Aplicar" size="full" type="button" modifier="create"  />
            <Button onClick={resetFilters} label="Resetar" size="full" type="button" modifier="cancel"  />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home;
