/* Dependencies */
import React from 'react';

const Header = () => {
  return (
    <div className="flex w-full m-4">
      <ul className="grid grid-cols-row-9 w-full items-center text-center text-base text-gray-700 bg-gray-200">
        <li>Action Item</li>
        <li className="py-3 bg-white priority-shadown">Prioridade</li>
        <li>Data Início</li>
        <li>Data Conclusão</li>
        <li>Status</li>
        <li>Tipo</li>
        <li>Responsável</li>
        <li>Editar</li>
        <li>Excluir</li>
      </ul>
    </div>
  )
}

export default Header;
