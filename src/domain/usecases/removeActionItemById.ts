/* Entities */
import { ActionItem } from '../entities/ActionItem';

/* Gateway */
import ActionItemGateway from '../gateways/ActionItem';

async function removeActionItemById(
  actionItemGateway: ActionItemGateway,
  itemId: string
): Promise<ActionItem> {
  try {
    return await actionItemGateway.removeActionItemById(itemId);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default removeActionItemById;
