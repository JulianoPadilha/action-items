/* Dependencies */
import express from 'express';
import path from 'path';

const router = express();

if (process.env.NODE_ENV === 'production') {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  router.use(express.static(path.resolve('./build')));
  
  router.get('/', (req: any, res: any) => {
    res.sendFile(path.resolve('./build', 'index.html'));
  });
}

export default router;