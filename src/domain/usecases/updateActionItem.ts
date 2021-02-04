/* Entities */
import { ActionItem } from '../entities/ActionItem';

/* Gateway */
import ActionItemGateway from '../gateways/ActionItem';

async function updateActionItem(
  actionItemGateway: ActionItemGateway,
  itemId: string,
  data: ActionItem
): Promise<ActionItem> {
  try {
    return await actionItemGateway.updateActionItem(itemId, data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default updateActionItem;
