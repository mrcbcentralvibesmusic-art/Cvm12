import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const DATA_FILE = path.join(process.cwd(), 'server/data/songs.json');

// GET all songs
router.get('/', (req, res) => {
  try {
    const songs = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load songs.' });
  }
});

export default router;