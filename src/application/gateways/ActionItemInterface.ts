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

  async getAllActionItems(): Promise<ActionItem> {
    const result: any = await ActionItemModel.find({});
    return result;
  }

  async getActionItemById(itemId: string): Promise<ActionItem> {
    const result: any = await ActionItemModel.findById(itemId);
    return result;
  }

  async filterActionItemByData(data: any): Promise<ActionItem> {
    const result: any = await ActionItemModel.find(JSON.parse(data)).exec();
    return result;
  }

  async updateActionItem(itemId: string, data: ActionItem): Promise<ActionItem> {
    const options: any = {
      useFindAndModify: false
    }
    const actionItem: any = await ActionItemModel.findByIdAndUpdate(itemId, data, options);
    return actionItem;
  }

  async removeActionItemById(itemId: string): Promise<ActionItem> {
    const options: any = {
      useFindAndModify: false
    }
    const result: any = await ActionItemModel.findByIdAndRemove(itemId, options);
    return result;
  }
}

export default new ActionItemInterface();
