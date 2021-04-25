import { Router } from 'express';
import httpHandler from '../../commons/http-handler';
import authMiddleware from '../../auth/service/middleware';
import doctorService from '../service/index';
import doctorMiddleware from '../service/middleware';

const router = Router();

router.post(
  '/',
  authMiddleware.isLoggedIn,
  doctorMiddleware.isPatient,
  httpHandler(async (req, res) => {
    const details = req.body;
    const patientId = req.user._id;
    await doctorService.putRecord({ details, patient_id: patientId });
    res.send('success');
  })
);

router.get(
  '/all-doctors',
  authMiddleware.isLoggedIn,
  doctorMiddleware.isPatient,
  httpHandler(async (req, res) => {
    const patientId = req.user._id;
    const records = await doctorService.fetchRecord({
      patient_id: patientId,
    });
    res.send(records);
  })
);

router.get(
  '/doctor/:doctor_id',
  authMiddleware.isLoggedIn,
  doctorMiddleware.isPatient,
  httpHandler(async (req, res) => {
    const { doctor_id } = req.params;
    const patientId = req.user._id;
    const record = await doctorService.getRecord({
      patient_id:patientId,
      doctor_id,
    });
    res.send(record);
  })
);

router.delete(
  '/:doctor_id',
  authMiddleware.isLoggedIn,
  doctorMiddleware.isPatient,
  httpHandler(async (req, res) => {
    const { doctor_id: doctorId } = req.params;
    await doctorService.removeRecord(doctorId);
    res.send('success');
  })
);

export default router;
