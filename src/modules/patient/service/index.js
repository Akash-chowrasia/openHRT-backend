import { patient } from '../model';

const patientService = {};

patientService.putRecord = async ({ details, doctor_id }) => {
  await patient.create({ ...details, doctor_id });
};

patientService.fetchRecord = async ({ doctor_id }) => {
  const records = await patient.find({ doctor_id, is_deleted: false });
  return records;
};

patientService.getRecord = async ({ patient_id, doctor_id }) => {
  const record = await patient.findOne({
    patient_id,
    doctor_id,
    is_deleted: false,
  });
  return record;
};

patientService.removeRecord = async (patientId) => {
  await patient.findOneAndUpdate(
    { patient_id: patientId },
    { is_deleted: true }
  );
};

export default patientService;
