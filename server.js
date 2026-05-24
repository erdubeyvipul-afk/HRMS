require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./backend/models');

// Import routes
const authRoutes = require('./backend/routes/auth');
const userRoutes = require('./backend/routes/users');
const attendanceRoutes = require('./backend/routes/attendance');
const leaveRoutes = require('./backend/routes/leaves');
const timesheetRoutes = require('./backend/routes/timesheets');
const trainingRoutes = require('./backend/routes/training');
const performanceRoutes = require('./backend/routes/performance');
const surveyRoutes = require('./backend/routes/surveys');
const payrollRoutes = require('./backend/routes/payroll');
const analyticsRoutes = require('./backend/routes/analytics');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/timesheets', timesheetRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/surveys', surveyRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/analytics', analyticsRoutes);

// Serve static frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}

// Database sync and server start
sequelize.sync({ alter: false }).then(() => {
  console.log('Database synced successfully');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database sync failed:', err);
});