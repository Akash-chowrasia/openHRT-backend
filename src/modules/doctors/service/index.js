import { doctor } from '../model';

const doctorService = {};

doctorService.putRecord = async ({ details, patient_id }) => {
  await doctor.create({ ...details, patient_id });
};

doctorService.fetchRecord = async ({ patient_id }) => {
  const records = await doctor.find({ patient_id, is_deleted: false });
  return records;
};

doctorService.getRecord = async ({ patient_id, doctor_id }) => {
  const record = await doctor.findOne({
    patient_id,
    doctor_id,
    is_deleted: false,
  });
  return record;
};

doctorService.removeRecord = async (doctorId) => {
  await doctor.findOneAndUpdate(
    { doctor_id: doctorId },
    { is_deleted: true }
  );
};

export default doctorService;
