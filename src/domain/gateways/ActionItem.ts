/* Entities */
import { ActionItem } from '../entities/ActionItem';

export default abstract class ActionItemGateway {
  abstract createActionItem(data: ActionItem): Promise<ActionItem>;
}
