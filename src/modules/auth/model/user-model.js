import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  role: {
    type: String,
    enum: ['DOCTOR', 'PATIENT'],
  },

  password: {
    type: String,
    required: true,
  },

  is_email_verified: {
    type: Boolean,
    default: true,
  },

  is_deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('auth_users', userSchema);
