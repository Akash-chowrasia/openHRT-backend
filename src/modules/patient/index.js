import { Router } from 'express';
import patientRouter from './router';

const router = Router();
router.use('/patient', patientRouter);

const patientModule = {
  init: (app) => {
    app.use(router);
    console.log('Patient module loaded');
  },
};

export default patientModule;
