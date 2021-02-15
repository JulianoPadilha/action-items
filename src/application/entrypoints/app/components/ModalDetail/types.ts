/* Types */
import { ActionItem } from '../../types/ActionItem';

export interface ModalDetailProps {
  item: ActionItem;
  closeModalDetail: () => void; 
  closeModalDetailClickOutside: (...args: any) => void;
}