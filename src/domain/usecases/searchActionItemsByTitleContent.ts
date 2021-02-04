/* Entities */
import { ActionItem } from '../entities/ActionItem';

/* Gateway */
import ActionItemGateway from '../gateways/ActionItem';

async function searchActionItemsByTitleContent(
  actionItemGateway: ActionItemGateway,
  data: string
): Promise<ActionItem> {
  try {
    return await actionItemGateway.searchActionItemsByTitleContent(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default searchActionItemsByTitleContent;
