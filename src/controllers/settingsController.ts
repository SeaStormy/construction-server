import { Request, Response } from 'express';
import Settings from '../models/Settings';

export const getSettings = async (req: Request, res: Response) => {
  try {
    const settings = await Settings.findById('website');
    res.json(settings || {});
  } catch (error: any) {
    console.error('Error fetching settings:', error);
    res
      .status(500)
      .json({ message: 'Error fetching settings', error: error.message });
  }
};

export const updateSettings = async (req: Request, res: Response) => {
  try {
    console.log('Received settings data:', req.body);

    const settings = await Settings.findById('website');
    console.log('Found existing settings:', settings);

    if (settings) {
      // Update existing settings
      console.log('Updating settings with ID:', settings._id);
      const updatedSettings = await Settings.findByIdAndUpdate(
        'website',
        { $set: req.body },
        { new: true, runValidators: true }
      );

      if (!updatedSettings) {
        console.error('Failed to update settings - document not found');
        return res.status(404).json({
          message: 'Settings document not found after update attempt',
        });
      }

      console.log('Successfully updated settings:', updatedSettings);
      res.json(updatedSettings);
    } else {
      // Create new settings
      console.log('No existing settings found, creating new document');
      const newSettings = new Settings({
        _id: 'website',
        ...req.body,
      });
      const savedSettings = await newSettings.save();
      console.log('Successfully created new settings:', savedSettings);
      res.status(201).json(savedSettings);
    }
  } catch (error: any) {
    console.error('Error updating settings:', error);
    res.status(400).json({
      message: 'Error updating settings',
      error: error.message,
      details: error,
    });
  }
};
