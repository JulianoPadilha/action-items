/* Enum */
export enum PriorityEnum {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low'
}

export enum ArrowRotation {
  High = 'rotate-180',
  Medium = '-rotate-90',
  Low = 'rotate-0'
}

export interface ActionItemType {
  title: string
  description: string
  creationDate: Date
  sprint: string
  status: string
  type: string
  owner: string
  priority: PriorityEnum
  assignmentDay: Date
  endDay: Date
  _id: string
}

/* Types */
export type RowTypes = {
  items: ActionItemType[];
  openModalDetail: any;
  isLoading: boolean;
  openModalDeleteActionItem: any;
}