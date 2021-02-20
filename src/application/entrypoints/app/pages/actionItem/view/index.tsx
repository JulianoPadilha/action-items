/* Dependencies */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* Utils */
import { statusList } from '../../../utils/statusList';
import { ownerList } from '../../../utils/ownerList';
import { typeList } from '../../../utils/typeList';
import { priorityList } from '../../../utils/priorityList';

/* Components */
import Button from '../../../components/Button/Button';
import Select from '../../../components/Select/Select';

/* Services */
import getActionItemById from '../../../services/getActionItemById';
import updateActionItem from '../../../services/updateActionItem';

const ActionItemDetail: any = (): any => {
  const [data, setData]: any = useState({});
  const [fields, setFields]: any = useState({});

  const { id }: any = useParams();

  useEffect(() => {
    (async () => {
      const response = await getActionItemById(id);
      setData(response);
      setFields(response);
    })();
  }, []);

  const update = async (event: any) => {
    event.preventDefault();
    const response = await updateActionItem(fields, id);
    setData(response);
    if (response) {
      window.location.href = '/';
    }
  }

  const onFieldChange = (event: any) => {
    //@ts-ignore
    const form = document.forms.actionItem;
    const { title, description, assignmentDay, endDay, status, priority, type, owner } = form;

    const ownerList: string[] = [];
    owner.querySelectorAll('option:checked').forEach((item: any) => ownerList.push(item.value));
    
    const fieldsValues = {
      title: title.value,
      description: description.value,
      assignmentDay: assignmentDay.value,
      endDay: endDay.value,
      status: status.value,
      priority: priority.value,
      type: type.value,
      owner: ownerList,
    }
    setFields(fieldsValues);
  }

  return (
    <div className="grid grid-cols-1 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
      <form name="actionItem" onSubmit={update} onChange={onFieldChange} className="w-3/5 my-0 mx-auto">
        {/* Título */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-base text-gray-500">Título</label>
          <input required defaultValue={fields.title} id="title" type="text" className="border-gray-300 border w-full rounded-md p-2" />
        </div>

        {/* Descrição */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-base text-gray-500">Descrição</label>
          <textarea required defaultValue={fields.description} id="description" className="border-gray-300 border w-full h-48 rounded-md p-2"></textarea>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-5">
          {/* Data de início */}
          <div>
            <label htmlFor="assignmentDay" className="block text-base text-gray-500">Data de Início</label>
            <input defaultValue={fields.assignmentDay} id="assignmentDay" type="date" className="border-gray-300 border w-full rounded-md p-2" />
          </div>

          {/* Data de conclusão */}
          <div>
            <label htmlFor="endDay" className="block text-base text-gray-500">Data de Conclusão</label>
            <input defaultValue={fields.endDay} id="endDay" type="date" className="border-gray-300 border w-full rounded-md p-2" />
          </div>
        </div>

        {/* Lista de Status e de Prioridades */}
        <div className="mb-6 grid grid-cols-2 gap-5">
          <Select required label="Status" id="status" size="full" value={fields.status} items={statusList} />
          <Select required label="Prioridade" id="priority" size="full" value={fields.priority} items={priorityList} />
        </div>

        {/* Lista de tipos */}
        <div className="mb-6">
          <Select required label="Tipo" id="type" size="full" value={fields.type} items={typeList} />
        </div>

        {/* Lista de responsáveis */}
        <div className="mb-6">
          <Select multiple label="Responsável" id="owner" size="full" value={fields.owner} items={ownerList} />
        </div>
        
        <div className="flex justify-end">
          <Button href="/" label="Cancelar" size="medium" type="button" modifier="cancel" className="mr-8"  />
          <Button label="Editar" size="medium" type="submit" modifier="create"  />
        </div>
      </form>
    </div>
  )
}

export default ActionItemDetail;
