import { Router } from 'express';
import httpHandler from '../../commons/http-handler';
import authMiddleware from '../../auth/service/middleware';
import reportService from '../service';
import reportMiddleware from '../service/middleware';

const router = Router();

router.post(
  '/',
  authMiddleware.isLoggedIn,
  reportMiddleware.isDoctor,
  httpHandler(async (req, res) => {
    const details = req.body;
    const doctorId = req.user._id;
    await reportService.putRecord({ details, doctor_id: doctorId });
    res.send('success');
  })
);

router.get(
  '/doctor/all-reports/:patient_id',
  authMiddleware.isLoggedIn,
  reportMiddleware.isDoctor,
  httpHandler(async (req, res) => {
    const { patient_id } = req.params;
    const doctorId = req.user._id;
    const records = await reportService.fetchRecord({
      patient_id,
      doctor_id: doctorId,
    });
    res.send(records);
  })
);

router.get(
  '/patient/all-reports/:patient_id',
  authMiddleware.isLoggedIn,
  reportMiddleware.isPatient,
  httpHandler(async (req, res) => {
    const { doctor_id } = req.params;
    const patientId = req.user._id;
    const records = await reportService.fetchRecord({
      patient_id: patientId,
      doctor_id,
    });
    res.send(records);
  })
);

router.get(
  '/doctor/report',
  authMiddleware.isLoggedIn,
  reportMiddleware.isDoctor,
  httpHandler(async (req, res) => {
    const { patient_id, test_name } = req.query;
    const doctorId = req.user._id;
    const record = await reportService.getRecord({
      patient_id,
      doctor_id: doctorId,
      test_name,
    });
    res.send(record);
  })
);

router.get(
  '/patient/report',
  authMiddleware.isLoggedIn,
  reportMiddleware.isDoctor,
  httpHandler(async (req, res) => {
    const { doctor_id, test_name } = req.query;
    const patientId = req.user._id;
    const record = await reportService.getRecord({
      patient_id: patientId,
      doctor_id,
      test_name,
    });
    res.send(record);
  })
);

router.delete(
  '/:test_id',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res) => {
    const { test_id: testId } = req.params;
    await reportService.removeRecord(testId);
    res.send('success');
  })
);

export default router;
