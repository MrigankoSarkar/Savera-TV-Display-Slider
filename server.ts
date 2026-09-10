import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { INITIAL_BIRTHDAY_PERSONS } from './src/data/birthdaysData';

let birthdayPersons = [...INITIAL_BIRTHDAY_PERSONS];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // GET /api/birthdays - Return active birthday persons for the carousel
  app.get('/api/birthdays', (_req, res) => {
    res.json({
      success: true,
      count: birthdayPersons.length,
      persons: birthdayPersons,
      lastUpdated: new Date().toISOString(),
    });
  });

  // POST /api/birthdays - Dynamically update or add birthday persons from server
  app.post('/api/birthdays', (req, res) => {
    try {
      const { persons, reset } = req.body;
      if (reset) {
        birthdayPersons = [...INITIAL_BIRTHDAY_PERSONS];
        return res.json({ success: true, count: birthdayPersons.length, persons: birthdayPersons });
      }
      if (Array.isArray(persons) && persons.length >= 2) {
        birthdayPersons = persons;
        return res.json({ success: true, count: birthdayPersons.length, persons: birthdayPersons });
      } else if (req.body && req.body.nameEn && req.body.imageUrl) {
        const newPerson = {
          id: req.body.id || `b_${Date.now()}`,
          nameEn: req.body.nameEn,
          nameMr: req.body.nameMr || req.body.nameEn,
          deptEn: req.body.deptEn || 'Production Dept.',
          deptMr: req.body.deptMr || 'उत्पादन विभाग',
          imageUrl: req.body.imageUrl,
          unitEn: req.body.unitEn || 'Unit - I',
          unitMr: req.body.unitMr || 'युनिट - १',
          date: req.body.date || 'Today / आज',
        };
        birthdayPersons.push(newPerson);
        return res.json({ success: true, count: birthdayPersons.length, persons: birthdayPersons });
      }
      return res.status(400).json({ error: 'Please provide at least two persons or valid person data' });
    } catch (err: any) {
      return res.status(500).json({ error: err.message || 'Internal server error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
