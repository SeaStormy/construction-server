import mongoose, { Document, Schema } from 'mongoose';

export interface ISettings extends Document {
  _id: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutImage: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  services: {
    newConstruction: {
      image: string;
      title: string;
      description: string;
    };
    renovations: {
      image: string;
      title: string;
      description: string;
    };
    commercial: {
      image: string;
      title: string;
      description: string;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

const SettingsSchema: Schema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    heroImage: String,
    heroTitle: String,
    heroDescription: String,
    aboutTitle: String,
    aboutDescription: String,
    aboutImage: String,
    contactEmail: String,
    contactPhone: String,
    contactAddress: String,
    services: {
      newConstruction: {
        image: String,
        title: String,
        description: String,
      },
      renovations: {
        image: String,
        title: String,
        description: String,
      },
      commercial: {
        image: String,
        title: String,
        description: String,
      },
    },
  },
  {
    timestamps: true,
    _id: false, // This tells Mongoose not to create an automatic _id field
  }
);

export default mongoose.model<ISettings>('Settings', SettingsSchema);
