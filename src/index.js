import './modules/db';
import { Router } from 'express';
import { finishApp, getAnApp } from './app';
import authModule from './modules/auth';
import reportModule from './modules/reports';
import patientModule from './modules/patient';
import doctorModule from "./modules/doctors";

const PORT = process.env.PORT || 8000;

const modules = [authModule, reportModule, patientModule, doctorModule];

const app = getAnApp();
const app1 = Router();
app.use('/api', app1);

modules.map((individualReport) => individualReport.init(app1));

finishApp(app1);

(async () => {
  try {
    await app.listen(PORT);
    console.log('-------   Server Started  ------');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
