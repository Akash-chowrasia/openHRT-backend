import { report } from '../model';

const reportService = {};

reportService.putRecord = async ({ details, doctor_id }) => {
  await report.create({ ...details, doctor_id });
};

reportService.fetchRecord = async ({ patient_id, doctor_id }) => {
  const records = await report.find({
    patient_id,
    doctor_id,
  });
  return records;
};

reportService.getRecord = async ({ patient_id, doctor_id, test_name }) => {
  const record = await report.findOne({
    patient_id,
    doctor_id,
    test_name,
    is_deleted: false,
  });
  return record;
};

reportService.removeRecord = async (testId) => {
  await report.findByIdAndUpdate(testId, { is_deleted: true });
};

export default reportService;
