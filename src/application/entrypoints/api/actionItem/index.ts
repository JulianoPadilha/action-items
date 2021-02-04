/* Dependencies */
import express, { IRouter } from 'express';

/* Controller */
import ActionItemController from './controller';

const router: IRouter = express.Router();

router.post('/', ActionItemController.createActionItem);
router.put('/:itemId', ActionItemController.updateActionItem);
router.get('/', ActionItemController.getAllActionItems);
router.get('/:itemId', ActionItemController.getActionItemById);
router.delete('/:itemId', ActionItemController.removeActionItemById);

export default router;
