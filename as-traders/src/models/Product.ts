import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Please provide a product slug'],
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a product description'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
      enum: [
        'writing-supplies',
        'school-stationery',
        'office-supplies',
        'paper-products',
        'art-craft',
        'educational-supplies',
      ],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      min: 0,
    },
    minOrder: {
      type: Number,
      required: [true, 'Please provide minimum order quantity'],
      min: 1,
    },
    images: [
      {
        url: String,
        alt: String,
      },
    ],
    specifications: {
      type: Map,
      of: String,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ slug: 1 });
productSchema.index({ category: 1 });
productSchema.index({ featured: 1 });

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
