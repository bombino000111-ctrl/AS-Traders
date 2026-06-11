import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide your phone number'],
    },
    company: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      enum: ['wholesale', 'product', 'general'],
      default: 'wholesale',
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: Number,
      },
    ],
    status: {
      type: String,
      enum: ['new', 'contacted', 'converted', 'closed'],
      default: 'new',
    },
    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

inquirySchema.index({ status: 1 });
inquirySchema.index({ createdAt: -1 });

const Inquiry =
  mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);

export default Inquiry;
