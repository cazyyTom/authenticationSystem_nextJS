import mongoose from 'mongoose';
userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Required username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Required email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Required password'],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});
const User = mongoose.model.users || mongoose.model('users', userSchema);
export default User;