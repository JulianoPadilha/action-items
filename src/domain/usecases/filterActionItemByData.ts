/* Entities */
import { ActionItem } from '../entities/ActionItem';

/* Gateway */
import ActionItemGateway from '../gateways/ActionItem';

async function filterActionItemByData(
  actionItemGateway: ActionItemGateway,
  data: any
): Promise<ActionItem> {
  try {
    return await actionItemGateway.filterActionItemByData(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default filterActionItemByData;
