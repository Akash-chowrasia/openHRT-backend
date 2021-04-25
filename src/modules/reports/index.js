import { Router } from 'express';
import reportRouter from './router';

const router = Router();
router.use('/report', reportRouter);

const reportModule = {
  init: (app) => {
    app.use(router);
    console.log('Report module loaded');
  },
};

export default reportModule;
