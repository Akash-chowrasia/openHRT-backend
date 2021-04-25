import mongoose from 'mongoose';

const doctorSchema = mongoose.Schema({
  doctor_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  patient_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  doctor_name: String,
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

doctorSchema.index({ doctor_id: 1, patient_id: 1 });

export default mongoose.model('doctor-record', doctorSchema);
