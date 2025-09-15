import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const DATA_FILE = path.join(process.cwd(), 'server/data/artists.json');

// GET all artists
router.get('/', (req, res) => {
  try {
    const artists = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load artists.' });
  }
});

export default router;