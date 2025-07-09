const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'ยินดีต้อนรับสู่ Surayut Project',
    description: 'เริ่มต้นสร้างโปรเจ็ต - Welcome to Surayut Project',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Surayut server is running on port ${PORT}`);
    console.log(`📝 เริ่มต้นสร้างโปรเจ็ต - Project started successfully`);
  });
}

module.exports = app;