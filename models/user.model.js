import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  profilePicture: { type: String },
  verified: { type: Boolean, default: false },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
