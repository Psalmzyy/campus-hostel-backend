# Campus Hostel Management Platform - Backend

## Project Overview
This is the backend server for the Campus Hostel Management Platform. It manages:
- Student registration and login
- Hostel room listings
- Housing applications (Apply, Approve, Reject)
- Admin dashboard for managing student applications

Built with:
- Node.js
- Express.js
- Data storage via local JSON files (no external database)

---

## Deployment Link
- **Backend Render Deployment:** [https://campus-hostel-backend-2po4.onrender.com](https://campus-hostel-backend-2po4.onrender.com)

---

## API Endpoints

| Method | Endpoint | Description |
|:---|:---|:---|
| POST | `/api/register` | Register a new user (student or admin) |
| POST | `/api/login` | Login user |
| GET | `/api/hostels` | Get list of available hostels |
| POST | `/api/apply` | Submit housing application |
| GET | `/api/applications` | Admin view all applications |
| POST | `/api/application/:id/decision` | Admin approve or reject application |

---

## Login Details (for testing)

- **Admin Account:**
  - Email: `admin@example.com`
  - Password: `admin123`
- **Student Account:**
  - Email: `teststudent@example.com`
  - Password: `password123`

---

## Feature Checklist

| Feature | Status |
|:---|:---|
| Student Registration | ✔️ |
| Student Login | ✔️ |
| View Available Hostels | ✔️ |
| Apply for Hostel | ✔️ |
| Admin View Applications | ✔️ |
| Admin Approve/Reject Applications | ✔️ |
| Local JSON Storage | ✔️ |
| Deployment on Render | ✔️ |

---

## Installation Instructions (for Local Testing)

To run the backend server locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/campus-hostel-backend.git

2. Install dependencies: npm install

3. Start the server: node server.js

4. Server will run @ : http://localhost:3000

Name: [Daniel Kingsley Bright Amusah]

Institution: Academic City University College

Course: IT2239 Web Technologies and Development

