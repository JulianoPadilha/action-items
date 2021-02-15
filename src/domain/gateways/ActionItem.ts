/* Entities */
import { ActionItem } from '../entities/ActionItem';

export default abstract class ActionItemGateway {
  abstract createActionItem(data: ActionItem): Promise<ActionItem>;
  abstract getAllActionItems(): Promise<ActionItem>;
  abstract getActionItemById(itemId: string): Promise<ActionItem>;
  abstract updateActionItem(itemId: string, data: ActionItem): Promise<ActionItem>;
  abstract filterActionItemByData(data: any): Promise<ActionItem>;
  abstract removeActionItemById(itemId: string): Promise<ActionItem>;
}
