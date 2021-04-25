import { Router } from 'express';
import doctorRouter from './router';

const router = Router();
router.use('/doctor', doctorRouter);

const doctorModule = {
  init: (app) => {
    app.use(router);
    console.log('doctor module loaded');
  },
};

export default doctorModule;
