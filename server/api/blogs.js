import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const DATA_FILE = path.join(process.cwd(), 'server/data/blogs.json');

// GET all blog posts
router.get('/', (req, res) => {
  try {
    const blogs = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load blogs.' });
  }
});

export default router;