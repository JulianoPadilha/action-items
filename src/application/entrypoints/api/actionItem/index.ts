/* Dependencies */
import express, { IRouter } from 'express';

/* Controller */
import ActionItemController from './controller';

const router: IRouter = express.Router();

router.post('/', ActionItemController.createActionItem);

export default router;
