import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  doctor_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  patient_id: {
    type: mongoose.Types.ObjectId,
  },
  test_name: {
    type: String,
    enum: ['testosteron', 'blood', 'astrogen'],
    default: 'astrogen',
  },
  status: {
    type: String,
    enum: ['normal', 'serious', 'care needed'],
    default: 'normal',
  },
  growth_from_last_month: {
    type: Number,
    enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    default: 0,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

reportSchema.index({ doctor_id: 1, patient_id: 1 });

export default mongoose.model('report_record', reportSchema);
