/* Dependencies */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

/* Database */
import connectDB from '../../database/db';

/* Routers */
import actionItemRouter from '../entrypoints/api/actionItem';

const router = express();
const PORT = 8000;

connectDB();

router.listen(process.env.PORT || PORT, () => console.log(`Server is listening on port ${PORT}`));

router.use(cors());
router.use((bodyParser.json()));
router.use('/api/action-item', actionItemRouter);

export default router;
