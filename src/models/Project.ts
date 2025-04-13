import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['residential', 'commercial', 'industrial', 'renovation'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IProject>('Project', ProjectSchema);
