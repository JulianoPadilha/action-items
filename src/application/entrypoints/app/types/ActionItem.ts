/* Enums */
import { StatusEnum } from './enums/ActionItemStatus';
import { TypeEnum } from './enums/ActionItemType';
import { OwnerEnum } from './enums/ActionItemOwner';
import { PriorityEnum } from './enums/ActionItemPriority';

/* Interface */
export interface ActionItem {
  _id: string;
  title: string
  description: string
  creationDate: Date
  status: StatusEnum
  type: TypeEnum
  owner: OwnerEnum
  priority: PriorityEnum,
  assignmentDay: Date,
  endDay: Date
};