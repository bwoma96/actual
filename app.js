import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// To simulate __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from the "pages" folder
app.use('/assets', express.static('assets'));


// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'dashboard.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'profile.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
