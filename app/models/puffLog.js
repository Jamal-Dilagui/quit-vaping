import mongoose from 'mongoose';

const puffLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    deviceInfo: {
      type: String,
      required: false
    },
    notes: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

export default mongoose.models.PuffLog || mongoose.model('PuffLog', puffLogSchema);