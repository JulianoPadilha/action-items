/* Entities */
import { ActionItem } from '../../domain/entities/ActionItem';

/* Gateways */
import ActionItemGateway from '../../domain/gateways/ActionItem';

/* Model */
import ActionItemModel from '../../domain/model/actionItemModel';

class ActionItemInterface implements ActionItemGateway {
  async createActionItem(data: ActionItem): Promise<ActionItem> {
    const actionItem: any = new ActionItemModel(data);
    return await actionItem.save();
  }
}

export default new ActionItemInterface();
