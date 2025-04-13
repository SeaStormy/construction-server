import { Request, Response } from 'express';
import Settings from '../models/Settings';

export const getSettings = async (req: Request, res: Response) => {
  try {
    const settings = await Settings.findOne().sort({ createdAt: -1 });
    res.json(settings || {});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching settings', error });
  }
};

export const updateSettings = async (req: Request, res: Response) => {
  try {
    const settings = await Settings.findOne().sort({ createdAt: -1 });

    if (settings) {
      // Update existing settings
      const updatedSettings = await Settings.findByIdAndUpdate(
        settings._id,
        req.body,
        { new: true, runValidators: true }
      );
      res.json(updatedSettings);
    } else {
      // Create new settings
      const newSettings = new Settings(req.body);
      await newSettings.save();
      res.status(201).json(newSettings);
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating settings', error });
  }
};
