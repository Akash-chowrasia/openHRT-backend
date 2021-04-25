import mongoose from 'mongoose';

const patientSchema = mongoose.Schema({
  doctor_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  patient_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  patient_name: String,
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

patientSchema.index({ doctor_id: 1, patient_id: 1 });

export default mongoose.model('patient-record', patientSchema);
