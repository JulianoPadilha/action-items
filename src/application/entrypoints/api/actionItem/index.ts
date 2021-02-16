/* Dependencies */
import express, { IRouter } from 'express';

/* Controller */
import ActionItemController from './controller';

const router: IRouter = express.Router();

router.get('/', ActionItemController.getAllActionItems);
router.get('/filter', ActionItemController.filterActionItemByData);
router.get('/metrics', ActionItemController.getConsolidatedMetrics);
router.get('/:itemId', ActionItemController.getActionItemById);
router.post('/', ActionItemController.createActionItem);
router.put('/:itemId', ActionItemController.updateActionItem);
router.delete('/:itemId', ActionItemController.removeActionItemById);

export default router;
