/* Enums */
import { StatusEnum } from './enums/ActionItemStatus';
import { TypeEnum } from './enums/ActionItemType';

/* Interface */
export interface ActionItem {
  title: string
  description: string
  sprintDate: Date
  sprintName: string
  status: StatusEnum
  type: TypeEnum
  owner: string
};
