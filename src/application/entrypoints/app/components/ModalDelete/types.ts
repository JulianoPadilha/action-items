/* Types */
import { ActionItem } from '../../types/ActionItem';

export interface ModalDeleteProps {
  item: ActionItem;
  closeModalDetail: () => void, 
  deleteActionItem: (itemId: string) => void,
  closeModalDetailClickOutside: (...args: any) => void,
}