/* Dependencies */
import React, { useState } from 'react';

/* Services */
import createActionItem from '../../../services/createActionItem';

/* Utils */
import { statusList } from '../../../utils/statusList';
import { ownerList } from '../../../utils/ownerList';
import { typeList } from '../../../utils/typeList';
import { priorityList } from '../../../utils/priorityList';

/* Components */
import Button from '../../../components/Button/Button';
import Select from '../../../components/Select/Select';

const CreateActionItem = () => {
  const [_data, setData] = useState({});
  const [fields, setFields]: any = useState({});

  const create = async (event: any) => {
    event.preventDefault();
    const response = await createActionItem(fields);
    setData(response);
    if (response) {
      window.location.href = '/';
    }
  }

  const onFieldChange = () => {
    //@ts-ignore
    const form = document.forms.actionItem;
    const { title, description, assignmentDay, endDay, status, priority, type, owner, sprint } = form;

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
      sprint: sprint.checked
    }
    setFields(fieldsValues);
  }

  return (
    <div className="grid grid-cols-1 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
      <form name="actionItem" onSubmit={create} onChange={onFieldChange} className="w-3/5 my-0 mx-auto">
        {/* Título */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-base text-gray-500">Título</label>
          <input required id="title" type="text" className="border-gray-300 border w-full rounded-md p-2" />
        </div>

        {/* Descrição */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-base text-gray-500">Descrição</label>
          <textarea required id="description" className="border-gray-300 border w-full h-48 rounded-md p-2"></textarea>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-5">
          {/* Data de início */}
          <div>
            <label htmlFor="assignmentDay" className="block text-base text-gray-500">Data de Início</label>
            <input id="assignmentDay" type="date" className="border-gray-300 border w-full rounded-md p-2" />
          </div>

          {/* Data de conclusão */}
          <div>
            <label htmlFor="endDay" className="block text-base text-gray-500">Data de Conclusão</label>
            <input id="endDay" type="date" className="border-gray-300 border w-full rounded-md p-2" />
          </div>
        </div>

        {/* Lista de Status e de Prioridades */}
        <div className="mb-6 grid grid-cols-2 gap-5">
          <Select required label="Status" id="status" size="full" items={statusList} />
          <Select required label="Prioridade" id="priority" size="full" items={priorityList} />
        </div>

        {/* Lista de tipos */}
        <div className="mb-6">
          <Select required label="Tipo" id="type" size="full" items={typeList} />
        </div>

        {/* Lista de responsáveis */}
        <div className="mb-6">
          <Select multiple label="Responsável" id="owner" size="full" items={ownerList} />
        </div>

        {/* Está na Sprint? */}
        <div className="mb-6">
          <label htmlFor="sprint" className="text-base text-gray-500 font-bold">Está na Sprint?</label>
          <input className="ml-2" id="sprint" type="checkbox" />
        </div>
        
        <div className="flex justify-end">
          <Button href="/" label="Cancelar" size="medium" type="button" modifier="cancel" className="mr-8"  />
          <Button label="Criar" size="medium" type="submit" modifier="create"  />
        </div>
      </form>
    </div>
  )
}

export default CreateActionItem;