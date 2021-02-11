/* Dependencies */
import React, { useState } from 'react';

/* Services */
import createActionItem from '../../../services/createActionItem';

/* Enums */
import { ActionItem } from '../../../../../../domain/entities/ActionItem'
import { StatusEnum } from '../../../../../../domain/entities/enums/ActionItemStatus';
import { OwnerEnum } from '../../../../../../domain/entities/enums/ActionItemOwner';
import { TypeEnum } from '../../../../../../domain/entities/enums/ActionItemType';
import { PriorityEnum } from '../../../../../../domain/entities/enums/ActionItemPriority';

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

  const onFieldChange = (event: any) => {
    const fieldName = event.target.id;
    const fieldValue = event.target.value;
    if (fieldName && fieldValue) {
      //Copy previously state value and aggregate new values
      setFields((state: any) => ({ ...state, [fieldName]: fieldValue }));
    }
  }

  return (
    <div className="grid grid-cols-1 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
      <form onSubmit={create} onChange={onFieldChange} className="w-3/5 my-0 mx-auto">
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

        <div className="mb-6 flex justify-between">
          {/* Data de início */}
          <div>
            <label htmlFor="assignmentDay" className="block text-base text-gray-500">Data de Início</label>
            <input required id="assignmentDay" type="date" className="border-gray-300 border w-96 rounded-md p-2" />
          </div>

          {/* Data de conclusão */}
          <div>
            <label htmlFor="endDay" className="block text-base text-gray-500">Data de Conclusão</label>
            <input id="endDay" type="date" className="border-gray-300 border w-96 rounded-md p-2" />
          </div>
        </div>

        <div className="mb-6 flex justify-between">
          <Select required label="Status" id="status" size="other" items={StatusEnum} />
          <Select required label="Prioridade" id="priority" size="other" items={PriorityEnum} />
        </div>

        <div className="mb-6 flex justify-between">
          <Select required label="Tipo" id="type" size="other" items={TypeEnum} />
          {fields && fields.type !== TypeEnum.GOOD_PRACTICE && (
            <Select required label="Responsável" id="owner" size="other" items={OwnerEnum} />
          )}
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