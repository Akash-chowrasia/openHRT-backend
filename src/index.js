import './modules/db';
import { Router } from 'express';
import { finishApp, getAnApp } from './app';
import authModule from './modules/auth';

const PORT = process.env.PORT || 8000;

const app = getAnApp();
const app1 = Router();
app.use('/api', app1);

authModule.init(app1);

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
