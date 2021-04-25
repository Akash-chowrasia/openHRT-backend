import { Router } from 'express';
import httpHandler from '../../commons/http-handler';
import authMiddleware from '../../auth/service/middleware';
import patientMiddleware from "../service/middleware";
import patientService from "../service";

const router = Router();

router.post(
  '/',
  authMiddleware.isLoggedIn,
  patientMiddleware.isDoctor,
  httpHandler(async (req, res) => {
    const details = req.body;
    const doctorId = req.user._id;
    await patientService.putRecord({ details, doctor_id: doctorId });
    res.send('success');
  })
);

router.get(
  '/all-patient',
  authMiddleware.isLoggedIn,
  patientMiddleware.isDoctor,
  httpHandler(async (req, res) => {
    const doctorId = req.user._id;
    const records = await patientService.fetchRecord({
      doctor_id: doctorId,
    });
    res.send(records);
  })
);

router.get(
  '/patient/:patient_id',
  authMiddleware.isLoggedIn,
  patientMiddleware.isDoctor,
  httpHandler(async (req, res) => {
    const { patient_id } = req.params;
    const doctorId = req.user._id;
    const record = await patientService.getRecord({
      patient_id,
      doctor_id: doctorId,
    });
    res.send(record);
  })
);

router.delete(
  '/:patient_id',
  authMiddleware.isLoggedIn,
  patientMiddleware.isDoctor,
  httpHandler(async (req, res) => {
    const { patient_id: patientId } = req.params;
    await patientService.removeRecord(patientId);
    res.send('success');
  })
);

export default router;
