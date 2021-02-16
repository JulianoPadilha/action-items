/* Entities */
import { ActionItem } from '../../../../domain/entities/ActionItem';
import { Metrics } from '../../../../domain/entities/Metrics';

/* Usecase */
import createActionItem from '../../../../domain/usecases/createActionItem';
import getAllActionItems from '../../../../domain/usecases/getAllActionItems';
import getActionItemById from '../../../../domain/usecases/getActionItemById';
import filterActionItemByData from '../../../../domain/usecases/filterActionItemByData';
import updateActionItem from '../../../../domain/usecases/updateActionItem';
import removeActionItemById from '../../../../domain/usecases/removeActionItemById';
import getConsolidatedMetrics from '../../../../domain/usecases/getConsolidatedMetrics';

/* Gateway Interface */
import ActionItemInterface from '../../../gateways/ActionItemInterface';
import MetricsInterface from '../../../gateways/MetricsInterface';

class ActionItemController {
  async createActionItem(req: any, res: any): Promise<ActionItem> {
    try {
      const result = await createActionItem(ActionItemInterface, req.body);
      return res.json(result);
    } catch (err) {
      console.log('createActionItem -> error: ', err);
    }
  }

  async getAllActionItems(_req: any, res: any): Promise<ActionItem> {
    try {
      const result = await getAllActionItems(ActionItemInterface);
      return res.json(result);
    } catch (err) {
      console.log('getAllActionItems -> error: ', err);
    }
  }

  async getActionItemById(req: any, res: any): Promise<ActionItem> {
    const {
      itemId
    } = req.params;
    try {
      const result = await getActionItemById(ActionItemInterface, itemId);
      return res.json(result);
    } catch (err) {
      console.log('getActionItemById -> err', err);
    }
  }

  async filterActionItemByData(req: any, res: any): Promise<ActionItem> {
    const {
      search
    } = req.query;
    try {
      const result = await filterActionItemByData(ActionItemInterface, search);
      return res.json(result);
    } catch (err) {
      console.log('searchActionItemsByTitleContent -> err', err);
    }
  }

  async updateActionItem(req: any, res: any): Promise<ActionItem> {
    const {
      params: { itemId },
      body
    } = req
    try {
      const result = await updateActionItem(ActionItemInterface, itemId, body);
      return res.json(result);
    } catch (err) {
      console.log('updateActionItem -> err', err);
    }
  }

  async removeActionItemById(req: any, res: any): Promise<ActionItem> {
    const {
      itemId
    } = req.params;
    try {
      const result = await removeActionItemById(ActionItemInterface, itemId);
      return res.json(result);
    } catch (err) {
      console.log('removeActionItemById -> err', err);
    }
  }

  async getConsolidatedMetrics(req: any, res: any): Promise<Metrics> {
    try {
      const result = await getConsolidatedMetrics(MetricsInterface);
      return res.json(result);
    } catch (err) {
      console.log('getConsolidatedMetrics -> err', err);
    }
  }
}

export default new ActionItemController();
