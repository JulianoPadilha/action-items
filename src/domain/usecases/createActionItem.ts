/* Entities */
import { ActionItem } from '../entities/ActionItem';

/* Gateway */
import ActionItemGateway from '../gateways/ActionItem';

async function createActionItem(
  actionItemGateway: ActionItemGateway,
  data: ActionItem
): Promise<ActionItem> {
  try {
    return await actionItemGateway.createActionItem(data);
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
}

export default createActionItem;
