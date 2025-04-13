import mongoose, { Document, Schema } from 'mongoose';

export interface ISettings extends Document {
  companyName: string;
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const SettingsSchema: Schema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    socialMedia: {
      facebook: String,
      twitter: String,
      instagram: String,
      linkedin: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISettings>('Settings', SettingsSchema);
