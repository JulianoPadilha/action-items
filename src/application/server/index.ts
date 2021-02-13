// export * as apiRouter from './apiRouter';
// export * as appRouter from './appRouter';

/* Dependencies */
import express from 'express';
import path from 'path';
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

if (process.env.NODE_ENV === 'production') {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  router.use(express.static(path.resolve('./build')));
  
  router.get('/', (req: any, res: any) => {
    res.sendFile(path.resolve('./build', 'index.html'));
  });
}

// export default router;
