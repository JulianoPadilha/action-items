/* Entities */
import { ActionItem } from '../../../../domain/entities/ActionItem';

/* Usecase */
import createActionItem from '../../../../domain/usecases/createActionItem';

/* Gateway Interface */
import ActionItemInterface from '../../../gateways/ActionItemInterface';

class ActionItemController {
  async createActionItem(req: any, res: any): Promise<ActionItem> {
    try {
      const result = await createActionItem(ActionItemInterface, req.body);
      return res.json(result);
    } catch (err) {
      console.log('EEEE', err);
    }
  }
}

export default new ActionItemController();
