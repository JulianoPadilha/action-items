/* Entities */
import { ActionItem } from '../entities/ActionItem';

/* Gateway */
import ActionItemGateway from '../gateways/ActionItem';

async function getAllActionItems(
  actionItemGateway: ActionItemGateway
): Promise<ActionItem> {
  try {
    return await actionItemGateway.getAllActionItems();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default getAllActionItems;
