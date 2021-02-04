/* Entities */
import { ActionItem } from '../entities/ActionItem';

/* Gateway */
import ActionItemGateway from '../gateways/ActionItem';

async function getActionItemById(
  actionItemGateway: ActionItemGateway,
  itemId: string
): Promise<ActionItem> {
  try {
    return await actionItemGateway.getActionItemById(itemId);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getActionItemById;
