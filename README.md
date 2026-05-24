# HRMS Enterprise - Complete Human Resource Management System

A full-featured HRMS application with attendance tracking (GPS geo-tagging), leave management, timesheets, training, performance reviews, surveys, payroll, real-time analytics, and reports.

## Features

- Role-based access (Admin, Manager, Employee)
- Check-in/out with GPS location
- Leave application & approval
- Timesheet logging
- Training assignment & completion tracking
- Performance reviews
- Employee surveys with analytics
- Automated payroll generation
- Real-time dashboard & reports

## Tech Stack

- **Frontend:** React 18, Tailwind CSS, Recharts
- **Backend:** Node.js, Express, Sequelize ORM
- **Database:** PostgreSQL
- **Auth:** JWT, bcrypt

## Deployment on Render

1. Push this repo to GitHub.
2. Create a new Web Service on Render, connect your repo.
3. Set environment variables:
   - `DATABASE_URL` (your PostgreSQL URL)
   - `JWT_SECRET` (random string)
   - `NODE_ENV=production`
4. Build command: `npm run build`
5. Start command: `npm start`
6. Create a PostgreSQL database on Render and link it.
7. Deploy!

## Local Development

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install

# Create .env file with your DATABASE_URL
# Run backend + frontend together
npm run dev