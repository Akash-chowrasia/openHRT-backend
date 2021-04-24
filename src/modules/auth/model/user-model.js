import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: {
    type: String,
    enum: ['DOCTOR', 'PATIENT'],
    default: 'PATIENT',
  },
  password: String,
  is_verified: {
    type: Boolean,
    default: false,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
});

userSchema.index({ email: 1 });

export default mongoose.model('user_models', userSchema);
