/* Types */
import { ActionItem } from '../../types/ActionItem';

export interface RowTypes {
  items: ActionItem[];
  isLoading: boolean;
  openModalDetail: (itemId: string) => void;
  openModalDeleteActionItem: (item: ActionItem) => void;
}